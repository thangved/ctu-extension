import 'bootstrap/dist/css/bootstrap.min.css';
import addGroupToTable from './addGroupToTable';
import addTimeTableWrapper from './addTimeTableWrapper';
import insertAddButtons from './insertAddButtons';
import './style.css';

window.onload = function () {
	const loginForm = document.querySelector(
		'#table-main > tbody > tr > td:nth-child(1) > form'
	) as HTMLFormElement;

	if (loginForm) loginForm.action = '//qldt.ctu.edu.vn/htql/sinhvien/dang_nhap.php';

	if (
		window.location.href ===
		'https://qldt.ctu.edu.vn/htql/dkmh/student/index.php?action=dmuc_mhoc_hky'
	) {
		startTimeTable();
	}
};

async function startTimeTable() {
	addTimeTableWrapper();

	await insertAddButtons();

	await addGroupToTable();
}
