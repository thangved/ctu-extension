import 'bootstrap/dist/css/bootstrap.min.css';
import addGroupToTable from './addGroupToTable';
import addTimeTableWrapper from './addTimeTableWrapper';
import insertAddButtons from './insertAddButtons';
import './styles/main.css';

const loginHref = '//qldt.ctu.edu.vn/htql/sinhvien/dang_nhap.php';
const dmHpAction = 'dmuc_mhoc_hky';

window.onload = function () {
	const params = new URLSearchParams(window.location.search);
	const action = params.get('action');

	const buttons = document.querySelectorAll('button');

	document.querySelector('#login-sv > tbody > tr:nth-child(3)')?.remove();
	const loginForm = document.querySelector(
		'#table-main > tbody > tr > td:nth-child(1) > form'
	) as HTMLFormElement;

	if (loginForm) loginForm.action = loginHref;

	if (action === dmHpAction) {
		startTimeTable();
	}
};

async function startTimeTable() {
	addTimeTableWrapper();

	await insertAddButtons();

	await addGroupToTable();
}
