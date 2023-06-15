export default function getGroupsTable() {
	const groupsTable = document.querySelectorAll('.border_1')[1];

	return groupsTable;
}

export function getHeaderRow() {
	const groupsTable = getGroupsTable();
	const headerRow = groupsTable.querySelector('tr') as HTMLTableRowElement;

	return headerRow;
}

export function getGroupsRows() {
	const groupsTable = getGroupsTable();
	const groupsRows = groupsTable.querySelectorAll('tr');

	return Array.from(groupsRows).slice(1);
}
