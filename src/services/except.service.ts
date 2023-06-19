export type ExceptType = Record<string, boolean>;

class ExceptService {
	async get(year: string, semester: string) {
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

	async toggle(year: string, semester: string, code: string) {
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

export default new ExceptService();
