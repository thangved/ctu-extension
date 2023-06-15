import addGroupToTable from './addGroupToTable';
import getLocalGroups from './getLocalGroups';
import { insertGroup } from './store';

export default async function handleAddGroup(groupId: string) {
	try {
		const localGroups = getLocalGroups();

		await insertGroup(localGroups[groupId]);

		const addButtons = document.querySelectorAll(
			'.add-course'
		) as NodeListOf<HTMLButtonElement>;

		for (const button of addButtons) {
			if (button.dataset.id === groupId) {
				button.classList.add('btn-success');
				button.classList.remove('btn-primary');
				button.innerText = 'Đã thêm';
				button.disabled = true;
			} else {
				button.classList.add('btn-primary');
				button.classList.remove('btn-success');
				button.innerText = 'Thêm';
				button.disabled = false;
			}
		}

		await addGroupToTable();
	} catch (error) {
		alert(error);
	}
}
