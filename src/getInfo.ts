export default function getInfo() {
	const year = (document.getElementById('cmbNamHoc') as HTMLOptionElement)
		.value;

	const semester = (document.getElementById('cmbHocKy') as HTMLOptionElement)
		.value;

	const courseCode = (document.getElementById('txtMaMH') as HTMLInputElement)
		.value;

	const courseName = (
		document.querySelector(
			'.border_1 tr.main_3 td:nth-child(2)'
		) as HTMLTableCellElement
	)?.innerText
		.split(':')[1]
		.trim();

	return { year, semester, courseCode, courseName };
}
