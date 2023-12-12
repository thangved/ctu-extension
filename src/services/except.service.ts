/**
 * @description Các môn học được loại trừ {mã môn học: boolean}
 */
export type ExceptType = Record<string, boolean>;

/**
 * @description Service lấy thông tin các môn học được loại trừ
 */
class ExceptService {
	/**
	 * @description Lấy thông tin các môn học được loại trừ
	 * @param year - Năm học
	 * @param semester - Học kỳ
	 * @returns - Các môn học được loại trừ
	 */
	async get(year: string, semester: string): Promise<ExceptType> {
		let { excepts } = await chrome.storage.sync.get('excepts');

		if (!excepts) {
			excepts = {};
		}

		if (!excepts[year]) {
			excepts[year] = {};
		}

		if (!excepts[year][semester]) {
			excepts[year][semester] = {};
		}

		await chrome.storage.sync.set({ excepts });

		return excepts[year][semester] as ExceptType;
	}

	/**
	 * @description Thay đổi trạng thái loại trừ của môn học (true -> false, false -> true)
	 * @param year - Năm học
	 * @param semester - Học kỳ
	 * @param code - Mã môn học
	 */
	async toggle(year: string, semester: string, code: string): Promise<void> {
		await this.get(year, semester);

		const { excepts } = await chrome.storage.sync.get('excepts');

		if (excepts[year][semester][code]) {
			excepts[year][semester][code] = false;
		} else {
			excepts[year][semester][code] = true;
		}

		await chrome.storage.sync.set({ excepts });
	}
}

export default new ExceptService() as ExceptService;
