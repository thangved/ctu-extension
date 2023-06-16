import { addTimeTableClickEvents } from './addEvents';
import addTimeTableHtml from './addTimeTableHtml';
import { getStoragedGroups } from './store';

export default async function addGroupToTable() {
	addTimeTableHtml();

	const storagedGroups = await getStoragedGroups();

	for (const group in storagedGroups) {
		const sessions = storagedGroups[group];

		for (const session of sessions) {
			const tableCell = document.getElementById(
				`ttbc-${session.day}-${session.start}`
			) as HTMLTableCellElement;

			tableCell.rowSpan = session.count;

			tableCell.innerHTML += /*html*/ `<div class="card m-0">
	<div class="card-body">
		<h5 class="card-title">${session.code} (${session.id})</h5>
		<h6 class="card-subtitle mb-2 text-body-secondary">${session.name}</h6>
		<p class="card-text">${session.location}</p>

		<button type="button" class="btn btn-danger delete-course" data-id="${session.code}">Xóa</button>
	</div>
</div>`;

			for (let i = session.start + 1; i < session.start + session.count; i++) {
				const tableCell = document.getElementById(
					`ttbc-${session.day}-${i}`
				) as HTMLTableCellElement;

				tableCell.remove();
			}
		}
	}

	await addTimeTableClickEvents();
}
