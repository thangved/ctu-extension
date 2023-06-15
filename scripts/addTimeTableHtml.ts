import { getTableWrapper } from './addTimeTableWrapper';
import getInfo from './getInfo';

export function createTableRowHtml(index: number, prefix = '') {
	return /*html*/ `<tr>
		<td>${index}</td>
		<td id="${prefix}-2-${index}"></td>
		<td id="${prefix}-3-${index}"></td>
		<td id="${prefix}-4-${index}"></td>
		<td id="${prefix}-5-${index}"></td>
		<td id="${prefix}-6-${index}"></td>
		<td id="${prefix}-7-${index}"></td>
	</tr>`;
}

export default function addTimeTableHtml() {
	const wrapper = getTableWrapper();
	wrapper.innerHTML = '';

	const { year, semester } = getInfo();

	const tableHtml = /*html*/ `<h2 class="text-center">Thời khóa biểu</h2>
	<p class="text-center">Năm học: ${year}, Học kỳ: ${semester}</p>
	<table class="table table-bordered">
		<thead>
			<tr>
				<th>Tiết / Thứ</th>
				<th>2</th>
				<th>3</th>
				<th>4</th>
				<th>5</th>
				<th>6</th>
				<th>7</th>
			</tr>
		</thead>

		<tbody>
			${createTableRowHtml(1, 'ttbc')}
			${createTableRowHtml(2, 'ttbc')}
			${createTableRowHtml(3, 'ttbc')}
			${createTableRowHtml(4, 'ttbc')}
			${createTableRowHtml(5, 'ttbc')}

			<tr>
				<td class="p-4" colspan="7"></td>
			</tr>

			${createTableRowHtml(6, 'ttbc')}
			${createTableRowHtml(7, 'ttbc')}
			${createTableRowHtml(8, 'ttbc')}
			${createTableRowHtml(9, 'ttbc')}
		</tbody>
	</table>`;

	const tableWrapper = getTableWrapper();

	if (!tableWrapper) throw new Error('Table wrapper not found');

	tableWrapper.innerHTML = tableHtml;
}
