const loginHref = '//dkmh.ctu.edu.vn/htql/sinhvien/dang_nhap.php';

/**
 * @description Remove txtMaBaoVe and change login form action
 * @returns Remove txtMaBaoVe
 */
export default function removeTxtMaBaoVe() {
	const txtMaBaoVe = document.getElementById(
		'txtMaBaoVe',
	) as HTMLInputElement;

	if (!txtMaBaoVe) return;

	txtMaBaoVe.parentElement?.remove();

	const loginForm = document.querySelector(
		'[name=frmLogin]',
	) as HTMLFormElement;

	loginForm.action = loginHref;
}
