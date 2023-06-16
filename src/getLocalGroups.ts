import { getGroupsRows } from './getGroupsTable';
import getInfo from './getInfo';
import { LocalGroupType } from './types';

export default function getLocalGroups() {
	const { courseCode, courseName } = getInfo();

	const groupsRows = getGroupsRows();

	const groups: Record<string, LocalGroupType[]> = {};

	for (const group of groupsRows) {
		const tds = group.querySelectorAll('td');

		const groupData = {
			code: courseCode,
			id: tds[1]?.innerText.trim(),
			day: Number(tds[2]?.innerText.trim()),
			start: Number(tds[3]?.innerText.trim()),
			count: Number(tds[4]?.innerText.trim()),
			location: tds[5]?.innerText.trim(),
			name: courseName,
		};

		if (!groups[groupData.id]) {
			groups[groupData.id] = [];
		}

		groups[groupData.id].push(groupData);
	}

	return groups;
}
