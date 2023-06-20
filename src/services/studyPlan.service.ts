import client from '../utils/client';

export interface CourseType {
	code: string;
	name: string;
	credit: number;
}

export type SemesterType = Record<string, CourseType[]>;

export type StudyPlanType = Record<string, SemesterType>;

class StudyPlanServive {
	studyPlan: StudyPlanType;

	async get() {
		if (this.studyPlan) return this.studyPlan;

		const htmlString = (await client.get(
			'/htql/sinhvien/ctdt/codes/sindex.php?mID=S101'
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

export default new StudyPlanServive();