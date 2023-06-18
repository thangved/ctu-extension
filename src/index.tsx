import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/main.css';
import removeTxtMaBaoVe from './utils/removeTxtMaBaoVe';

const loggedHost = 'qldt.ctu.edu.vn';

window.addEventListener('load', () => {
	removeTxtMaBaoVe();

	if (window.location.host === loggedHost) {
		mountApp();
	}
});

async function mountApp() {
	const pageHeader = document.getElementById('page-header');

	const rootId = Math.random().toString(36);

	pageHeader.outerHTML += /*html*/ `
	<div id="${rootId}"></div>
	`;

	createRoot(document.getElementById(rootId)).render(<App />);
}
