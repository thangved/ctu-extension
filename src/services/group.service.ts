import client from '../utils/client';

/**
 * @description Thông tin một buổi học của một lớp học phần
 */
export interface GroupSessionType {
	/**
	 * @description Thứ trong tuần (Thứ 2, Thứ 3, ...)
	 */
	day: string;
	/**
	 * @description Tiết bắt đầu
	 */
	start: number;
	/**
	 * @description Số tiết
	 */
	lesson: number;
	/**
	 * @description Phòng học (101/C1, 102/C1, ...)
	 */
	location: string;
}

/**
 * @description Thông tin một nhóm lớp học phần
 */
export interface GroupType {
	/**
	 * @description Tên lớp học phần
	 */
	name: string;
	/**
	 * @description Mã lớp học phần
	 */
	id: string;
	lecture: {
		code?: string;
		name?: string;
	};
	/**
	 * @description Số lượng tín chỉ
	 */
	wholesale: number;
	/**
	 * @description Số lượng chỗ còn lại
	 */
	remain: number;
	/**
	 * @description Các buổi học của lớp học phần
	 */
	sessions: GroupSessionType[];
}

/**
 * @description Service lấy thông tin lớp học phần
 */
class GroupService {
	private pendingLogin: Promise<unknown> | null = null;
	/**
	 * @description Đăng nhập vào hệ thống
	 */
	async login(): Promise<void> {
		if (this.pendingLogin) {
			await this.pendingLogin;
			return;
		}
		this.pendingLogin = client
			.postForm('/htql/dkmh/student/dang_nhap.php', {
				txtMatKhau: 'p',
			})
			.catch(() => Promise.resolve('Login success'));
		await this.pendingLogin;
	}

	/**
	 * @description Lấy thông tin lớp học phần
	 * @param code - Mã môn học
	 * @param year - Năm học
	 * @param semester - Học kỳ
	 * @returns
	 */
	async find(
		code: string,
		year: string,
		semester: string,
	): Promise<Record<string, GroupType>> {
		await this.login();

		// Lấy thông tin lớp học phần
		year = year.split('-')[1];

		const htmlString = (await client.postForm(
			'/htql/dkmh/student/index.php?action=dmuc_mhoc_hky',
			{
				cmbHocKy: semester,
				cmbNamHoc: year,
				txtMaMH: code,
				flag: 1,
				Button: 'Tìm',
			},
		)) as unknown as string;

		const dom = new DOMParser().parseFromString(htmlString, 'text/html');

		const table = dom.querySelectorAll('.border_1')[1] as HTMLTableElement;

		if (!table) {
			return this.find(code, year, semester);
		}

		const rows = Array.from(table.querySelectorAll('tr')).slice(
			1,
		) as HTMLTableRowElement[];

		if (rows[0].querySelector('td').colSpan === 12) {
			return {};
		}

		const hashedGroups: Record<string, GroupType> = {};

		for (const row of rows) {
			let distance = 0;
			const noSechedule = Number.isNaN(
				Number(row.children[2].textContent),
			);

			if (noSechedule) {
				distance = 3;
			}

			const groupId = row.children[1].textContent?.trim() ?? '';

			if (!hashedGroups[groupId]) {
				hashedGroups[groupId] = {
					name: row.children[11 - distance].textContent?.trim() ?? '',
					id: groupId,
					lecture: {
						code:
							row.children[6 - distance].textContent?.trim() ??
							'',
						name:
							row.children[7 - distance].textContent?.trim() ??
							'',
					},
					wholesale: Number(row.children[8 - distance].textContent),
					remain: Number(row.children[9 - distance].textContent),
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

export default new GroupService() as GroupService;
