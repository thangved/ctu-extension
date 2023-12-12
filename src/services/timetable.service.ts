export type TimetableSemesterType = Record<string, string[] | undefined>;

export type TimetableYearType = Record<string, TimetableSemesterType>;

export type TimetableType = Record<string, TimetableYearType>;

/**
 * @description Service lấy thông tin thời khóa biểu
 */
class TimetableService {
	/**
	 * @description Lấy thông tin thời khóa biểu
	 * @param year - Năm học
	 * @param semester - Học kỳ
	 * @returns - Thời khóa biểu
	 */
	async get(year: string, semester: string) {
		let { timetable } = await chrome.storage.sync.get('timetable');

		if (!timetable) {
			timetable = {};
		}

		if (!timetable[year]) {
			timetable[year] = {};
		}

		if (!timetable[year][semester]) {
			timetable[year][semester] = {};
		}

		await chrome.storage.sync.set({
			timetable,
		});

		return timetable[year][semester];
	}

	/**
	 * @description Thay đổi trạng thái thời khóa biểu của môn học (true -> false, false -> true)
	 * @param year - Năm học
	 * @param semester - Học kỳ
	 * @param code - Mã môn học
	 * @param group - Mã lớp học phần
	 */
	async toggle(year: string, semester: string, code: string, group: string) {
		await this.get(year, semester);
		const { timetable } = await chrome.storage.sync.get('timetable');

		if (!timetable[year][semester][code]) {
			timetable[year][semester][code] = [];
		}

		if (timetable[year][semester][code].includes(group)) {
			timetable[year][semester][code] = timetable[year][semester][
				code
			].filter((g: string) => g !== group);
		} else {
			timetable[year][semester][code].push(group);
		}

		await chrome.storage.sync.set({
			timetable,
		});
	}

	/**
	 * @description Thay đổi trạng thái thời khóa biểu của môn học (true -> false, false -> true)
	 * @param year - Năm học
	 * @param semester - Học kỳ
	 * @param code - Mã môn học
	 * @param groups - Mã lớp học phần
	 */
	async set(year: string, semester: string, code: string, groups: string[]) {
		await this.get(year, semester);
		const { timetable } = await chrome.storage.sync.get('timetable');

		timetable[year][semester][code] = groups;

		await chrome.storage.sync.set({
			timetable,
		});
	}

	/**
	 * @description	Thay đổi thời khóa biểu của học kỳ
	 * @param year - Năm học
	 * @param semester - Học kỳ
	 * @param timetable - Thời khóa biểu
	 */
	async setSemester(
		year: string,
		semester: string,
		timetable: TimetableSemesterType,
	) {
		await this.get(year, semester);

		const { timetable: currentTimetable } =
			await chrome.storage.sync.get('timetable');

		currentTimetable[year][semester] = timetable;

		await chrome.storage.sync.set({
			timetable: currentTimetable,
		});
	}
}

export default new TimetableService() as TimetableService;
