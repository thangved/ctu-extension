import studyPlanService from './studyPlan.service';

/**
 * @description Thông tin năm học và học kỳ
 */
export interface InfoType {
	/**
	 * @description Năm học
	 */
	year: string;
	/**
	 * @description Học kỳ
	 */
	semester: string;
}

/**
 * @description Service lấy thông tin năm học và học kỳ
 */
class InfoService {
	/**
	 * @description Lấy thông tin năm học và học kỳ
	 * @returns Thông tin năm học và học kỳ
	 */
	async get(): Promise<InfoType> {
		let { info } = await chrome.storage.sync.get('info');

		if (!info) {
			info = {};
		}

		if (!info.year || !info.semester) {
			const studyPlan = await studyPlanService.get();

			const year = Object.keys(studyPlan)[0];
			const semester = Object.keys(studyPlan[year])[0];

			await chrome.storage.sync.set({ info: { year, semester } });

			return { year, semester };
		}

		return info as InfoType;
	}

	/**
	 * @description Thay đổi thông tin năm học và học kỳ
	 * @param info - Thông tin năm học và học kỳ
	 */
	async set(info: InfoType) {
		await chrome.storage.sync.set({ info });
	}
}

export default new InfoService();
