import client from '../utils/client';

/**
 * @description Thông tin môn học
 */
export interface CourseType {
	/**
	 * @description Mã môn học
	 */
	code: string;
	/**
	 * @description Tên môn học
	 */
	name: string;
	/**
	 * @description Số tín chỉ
	 */
	credit: number;
}

/**
 * @description Thông tin kế hoạch học tập {học kỳ: [môn học]}
 */
export type SemesterType = Record<string, CourseType[]>;

/**
 * @description Thông tin kế hoạch học tập {năm học: {học kỳ: [môn học]}}
 */
export type StudyPlanType = Record<string, SemesterType>;

/**
 * @description Service lấy thông tin kế hoạch học tập
 */
class StudyPlanServive {
	/**
	 * @description Thông tin kế hoạch học tập
	 */
	private studyPlan: StudyPlanType;

	/**
	 * @description Lấy thông tin kế hoạch học tập
	 * @returns Thông tin kế hoạch học tập
	 */
	async get(): Promise<StudyPlanType> {
		if (this.studyPlan) return this.studyPlan;

		const htmlString = (await client.get(
			'/htql/sinhvien/ctdt/codes/sindex.php?mID=S101',
		)) as unknown as string;

		const dom = new DOMParser().parseFromString(htmlString, 'text/html');

		const formKhht = dom.getElementsByName('frmKeHoachHocTap')[0];

		const table = formKhht.querySelector('table');

		const rows = table.querySelectorAll('tr');

		const courseRows = Array.from(rows).slice(2, rows.length - 1);

		const studyPlan: StudyPlanType = {};

		for (const courseRow of courseRows) {
			const course: CourseType = {
				code: courseRow.children[1].textContent?.trim() ?? '',
				name: courseRow.children[2].textContent?.trim() ?? '',
				credit: Number(courseRow.children[3].textContent?.trim() ?? ''),
			};

			let semester = courseRow.children[5].textContent?.trim() ?? '';
			const year = courseRow.children[4].textContent?.trim() ?? '';

			if (Number.isNaN(Number(semester))) {
				semester = '3';
			}

			if (!studyPlan[year]) {
				studyPlan[year] = {};
			}

			if (!studyPlan[year][semester]) {
				studyPlan[year][semester] = [];
			}

			studyPlan[year][semester].push(course);
		}

		return studyPlan;
	}
}

export default new StudyPlanServive() as StudyPlanServive;
