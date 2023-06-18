import client from '../utils/client';

export interface GroupSessionType {
	day: string;
	start: number;
	lesson: number;
	location: string;
}

export interface GroupType {
	name: string;
	id: string;
	wholesale: number;
	remain: number;
	sessions: GroupSessionType[];
}

class GroupService {
	async find(code: string, year: string, semester: string) {
		year = year.split('-')[1];

		const htmlString = (await client.postForm(
			'/htql/dkmh/student/index.php?action=dmuc_mhoc_hky',
			{
				cmbHocKy: semester,
				cmbNamHoc: year,
				txtMaMH: code,
				flag: 1,
				Button: 'Tìm',
			}
		)) as unknown as string;

		const dom = new DOMParser().parseFromString(htmlString, 'text/html');

		const table = dom.querySelectorAll('.border_1')[1] as HTMLTableElement;

		const rows = Array.from(table.querySelectorAll('tr')).slice(
			1
		) as HTMLTableRowElement[];

		if (rows[0].querySelector('td').colSpan === 12) {
			return {};
		}

		const hashedGroups: Record<string, GroupType> = {};

		for (const row of rows) {
			let distance = 0;
			const noSechedule = Number.isNaN(
				Number(row.children[2].textContent)
			);

			if (noSechedule) {
				distance = 3;
			}

			const groupId = row.children[1].textContent?.trim() ?? '';

			if (!hashedGroups[groupId]) {
				hashedGroups[groupId] = {
					name: row.children[9 - distance].textContent?.trim() ?? '',
					id: groupId,
					wholesale: Number(row.children[6 - distance].textContent),
					remain: Number(row.children[7 - distance].textContent),
					sessions: [],
				};
			}

			if (noSechedule) continue;

			hashedGroups[groupId].sessions.push({
				day: row.children[2].textContent?.trim() ?? '',
				start: Number(row.children[3].textContent),
				lesson: Number(row.children[4].textContent),
				location: row.children[5].textContent?.trim() ?? '',
			});
		}

		return hashedGroups;
	}
}

export default new GroupService();
