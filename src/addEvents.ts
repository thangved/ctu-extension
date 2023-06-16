import handleAddGroup from './handleAddGroup';
import handleRemoveCourse from './handleRemoveCourse';

export async function addGroupsClickEvents() {
	const addButtons = document.querySelectorAll(
		'.add-course'
	) as NodeListOf<HTMLButtonElement>;

	for (const button of addButtons) {
		button.type = 'button';

		button.addEventListener('click', () =>
			handleAddGroup(button.dataset.id as string)
		);
	}
}

export async function addTimeTableClickEvents() {
	const deleteButtons = document.querySelectorAll(
		'.delete-course'
	) as NodeListOf<HTMLButtonElement>;

	for (const button of deleteButtons) {
		button.type = 'button';

		button.addEventListener('click', () =>
			handleRemoveCourse(button.dataset.id as string)
		);
	}
}
