import { CourseTypeWithGroups } from '../services/course.service';
import { TimetableSemesterType } from '../services/timetable.service';

type TimetableType = Record<string, string>;
type DayHashType = Record<string, Record<string, boolean>>;

let maxLength = 1000;

function recursive(
	dayHash: DayHashType[],
	filter: TimetableSemesterType,
	calendar: CourseTypeWithGroups[],
	coursesCode: string[],
	currentIndex: number,
	result: TimetableType[],
	excepts: Record<string, boolean>,
) {
	if (currentIndex === calendar.length) {
		return result;
	}

	const currentCourseCode = coursesCode[currentIndex];
	const filteredGroups = filter[currentCourseCode];

	if (excepts[currentCourseCode]) {
		return recursive(
			dayHash,
			filter,
			calendar,
			coursesCode,
			currentIndex + 1,
			result,
			excepts,
		);
	}

	const currentCourse = calendar.find(
		(course) => course.code === currentCourseCode,
	);
	const _result = [];
	const _dayHash = [];

	for (let i = 0; i < result.length; i++) {
		for (const filteredGroup of filteredGroups || []) {
			if (_result.length > maxLength) {
				throw new Error(
					'Số lượng thời khóa biểu quá lớn!! Vui lòng chọn ít nhóm hơn hoặc tăng giới hạn lên.',
				);
			}

			const sessions = currentCourse.groups[filteredGroup].sessions;

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
				_res[currentCourseCode] = filteredGroup;
				_result.push(_res);
				_dayHash.push(hash);
			}
		}
	}

	return recursive(
		_dayHash,
		filter,
		calendar,
		coursesCode,
		currentIndex + 1,
		_result,
		excepts,
	);
}

export default function getTimetables(
	filter: TimetableSemesterType,
	calendar: CourseTypeWithGroups[],
	excepts: Record<string, boolean>,
	maximun = maxLength,
) {
	maxLength = maximun;

	if (!calendar.length) return [] as TimetableType[];

	filter = JSON.parse(JSON.stringify(filter));

	for (const course of calendar.map((course) => course.code)) {
		if (!filter[course]?.length) {
			filter[course] = Object.keys(
				calendar.find(({ code }) => course === code)?.groups || {},
			);
		}
	}

	let result = [{}];

	const coursesCode = Object.keys(filter).sort(
		(a, b) => filter[a].length - filter[b].length,
	);

	result = recursive([], filter, calendar, coursesCode, 0, result, excepts);

	return result;
}
