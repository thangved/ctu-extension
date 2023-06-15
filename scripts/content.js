window.onload = function () {
	document.querySelector('#login-sv > tbody > tr:nth-child(3)')?.remove();
	// Load css
	const css = document.createElement('link');
	css.rel = 'stylesheet';
	css.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
	document.head.insertBefore(css, document.head.firstChild);

	if (document.querySelector('#table-main > tbody > tr > td:nth-child(1) > form'))
		document.querySelector('#table-main > tbody > tr > td:nth-child(1) > form').action =
			'//qldt.ctu.edu.vn/htql/sinhvien/dang_nhap.php';

	if (document.querySelector('.bg-module-top'))
		document.querySelector('.bg-module-top').innerHTML = '<h2>Đăng nhập</h2>';

	if (
		window.location.href ===
		'https://qldt.ctu.edu.vn/htql/dkmh/student/index.php?action=dmuc_mhoc_hky'
	) {
		startTimeTable();
	}
};

async function startTimeTable() {
	console.log(chrome.storage);

	/**
	 * @type {HTMLTableElement}
	 */
	const groupsTable = document.querySelectorAll('.border_1')[1];

	const allRow = Array.from(groupsTable.querySelectorAll('tr'));

	const header = allRow[0];

	const groups = allRow.slice(1);

	header.innerHTML += /*html*/ `<td class='main_3' align='center'>Thêm vào thời khóa biểu</td>`;

	for (const group of groups) {
		group.innerHTML += /*html*/ `<td class='level_1_1' align='center'>
			<button class='btn btn-primary m-2'>Thêm</button>
		</td>`;
	}
}
