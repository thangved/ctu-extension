const loginHref = '//qldt.ctu.edu.vn/htql/sinhvien/dang_nhap.php';

export default function removeTxtMaBaoVe() {
	const txtMaBaoVe = document.getElementById(
		'txtMaBaoVe'
	) as HTMLInputElement;

	if (!txtMaBaoVe) return;

	txtMaBaoVe.parentElement?.remove();

	const loginForm = document.querySelector(
		'[name=frmLogin]'
	) as HTMLFormElement;

	loginForm.action = loginHref;
}
