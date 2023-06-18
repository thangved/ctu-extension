import studyPlanService from './studyPlan.service';

export interface InfoType {
	year: string;
	semester: string;
}

class InfoService {
	async get() {
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

	async set(info: InfoType) {
		await chrome.storage.sync.set({ info });
	}
}

export default new InfoService();
