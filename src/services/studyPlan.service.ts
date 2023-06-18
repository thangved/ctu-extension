import client from '../utils/client';

export interface CourseType {
	code: string;
	name: string;
	credit: number;
}

export type SemesterType = Record<string, CourseType[]>;

export type StudyPlanType = Record<string, SemesterType>;

class StudyPlanServive {
	async crawl() {
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

			const semester = courseRow.children[5].textContent?.trim() ?? '';
			const year = courseRow.children[4].textContent?.trim() ?? '';

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

	async get() {
		const storage = await chrome.storage.sync.get('studyPlan');

		return storage.studyPlan as StudyPlanType;
	}

	async set(studyPlan: StudyPlanType) {
		await chrome.storage.sync.set({ studyPlan });
	}
}

export default new StudyPlanServive();
