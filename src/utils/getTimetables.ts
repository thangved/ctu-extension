import { CourseTypeWithGroups } from '../services/course.service';
import { TimetableSemesterType } from '../services/timetable.service';

type TimetableType = Record<string, string>;
type DayHashType = Record<string, Record<string, boolean>>;

function recursive(
	dayHash: DayHashType[],
	filter: TimetableSemesterType,
	calendar: CourseTypeWithGroups[],
	courses: string[],
	currentIndex: number,
	result: TimetableType[],
	excepts: Record<string, boolean>
) {
	if (currentIndex === calendar.length) {
		return result;
	}

	const currentCourse = courses[currentIndex];
	const filteredGroups = filter[currentCourse];

	if (excepts[currentCourse]) {
		return recursive(
			dayHash,
			filter,
			calendar,
			courses,
			currentIndex + 1,
			result,
			excepts
		);
	}

	const _result = [];
	const _dayHash = [];

	for (let i = 0; i < result.length; i++) {
		for (const filteredGroup of filteredGroups || []) {
			const sessions =
				calendar.find((course) => course.code === currentCourse)
					?.groups[filteredGroup].sessions || [];

			let confilct = false;
			const hash = { ...dayHash[i] };

			for (const session of sessions) {
				const day = session.day;
				const start = session.start;
				const end = session.start + session.lesson - 1;

				if (!hash[day]) {
					hash[day] = {};
				}

				for (let i = start; i < end; i++) {
					if (hash[day][i]) {
						confilct = true;
					} else {
						hash[day][i] = true;
					}
				}
			}

			if (!confilct) {
				const _res = { ...result[i] };
				_res[currentCourse] = filteredGroup;
				_result.push(_res);
			}
			_dayHash.push(hash);
		}
	}

	return recursive(
		_dayHash,
		filter,
		calendar,
		courses,
		currentIndex + 1,
		_result,
		excepts
	);
}

export default function getTimetables(
	filter: TimetableSemesterType,
	calendar: CourseTypeWithGroups[],
	excepts: Record<string, boolean>
) {
	if (!calendar.length) return [] as TimetableType[];

	filter = JSON.parse(JSON.stringify(filter));

	for (const course of calendar.map((course) => course.code)) {
		if (!filter[course]?.length) {
			filter[course] = Object.keys(
				calendar.find(({ code }) => course === code)?.groups || {}
			);
		}
	}

	let result = [{}];
	const courses = Object.keys(filter);

	result = recursive([], filter, calendar, courses, 0, result, excepts);

	return result;
}
