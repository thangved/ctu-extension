export const tableWrapperId = Math.random().toString(36);

export default function addTimeTableWrapper() {
	const container = document.getElementById('menu0') as HTMLDivElement;

	const tableWrapper = /*html*/ `<div class="card border ttb-wrapper sticky-top" id=${tableWrapperId}></div>`;

	container.outerHTML += tableWrapper;

	const tbl0 = document.getElementById('tbl0');
	const tbl0Tr = tbl0?.querySelector('tr');

	const expandButton = document.createElement('td');
	expandButton.className = 'btn btn-outline-primary';
	expandButton.innerText = 'Mở rộng';

	tbl0Tr?.appendChild(expandButton);

	let expanded = false;

	expandButton.addEventListener('click', () => {
		getTableWrapper().classList.toggle('expanded');
		expanded = !expanded;

		expandButton.innerText = expanded ? 'Thu lại' : 'Mở rộng';
	});

	return tableWrapper;
}

export function getTableWrapper() {
	return document.getElementById(tableWrapperId) as HTMLDivElement;
}
