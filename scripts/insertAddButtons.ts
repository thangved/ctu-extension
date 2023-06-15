import { addGroupsClickEvents } from './addEvents';
import { getGroupsRows, getHeaderRow } from './getGroupsTable';
import getInfo from './getInfo';
import { getStoragedGroups } from './store';

export default async function insertAddButtons() {
	const { courseCode } = getInfo();

	const header = getHeaderRow();
	header.innerHTML += /*html*/ `<td class='main_3' align='center'>Thêm vào thời khóa biểu</td>`;

	const groupsRows = getGroupsRows();
	const courseGroups = await getStoragedGroups();

	for (const group of groupsRows) {
		const tds = group.querySelectorAll('td');

		const groupId = tds[1]?.innerText.trim();

		const added = !!(courseGroups[courseCode]?.[0]?.id === groupId);

		group.innerHTML += /*html*/ `<td class='level_1_1' align='center'>
			<button class='btn m-2 add-course ${added ? 'btn-success' : 'btn-primary'}' data-id='${groupId}' ${
			added ? 'disabled' : ''
		}>${added ? 'Đã thêm' : 'Thêm'}</button>
		</td>`;
	}

	await addGroupsClickEvents();
}
