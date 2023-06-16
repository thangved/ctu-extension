import getInfo from './getInfo';
import { LocalGroupType } from './types';

declare const chrome: any;

export async function getStoragedGroups(): Promise<Record<string, LocalGroupType[]>> {
	const store = chrome.storage.sync;
	const { year, semester } = getInfo();

	const groups = await store.get();

	return groups[`${year}-${semester}`] || {};
}

export async function checkConflict(session: LocalGroupType): Promise<string | undefined> {
	const storaged = await getStoragedGroups();

	for (const courseCode in storaged) {
		const sessions = storaged[courseCode];

		for (const _session of sessions) {
			if (session.day === _session.day) {
				const start = session.start;
				const _start = _session.start;

				const end = session.start + session.count - 1;
				const _end = _session.start + _session.count - 1;

				if (start <= _start && end >= _start) {
					return session.code;
				}

				if (start <= _end && end >= _end) {
					return session.code;
				}
			}
		}
	}
}

export async function insertGroup(group: LocalGroupType[]) {
	const { year, semester } = getInfo();

	const store = chrome.storage.sync;

	for (const session of group) {
		const conflict = await checkConflict(session);
		if (conflict) {
			throw new Error(`Nhóm học phần bạn đang chọn bị trùng với học phần ${conflict}`);
		}
	}

	const groups = await getStoragedGroups();

	groups[group[0]?.code] = group;

	await store.set({ [`${year}-${semester}`]: groups });
}

export async function removeCourse(courseCode: string) {
	const { year, semester } = getInfo();

	const store = chrome.storage.sync;

	const groups = await getStoragedGroups();

	delete groups[courseCode];

	await store.set({ [`${year}-${semester}`]: groups });
}
