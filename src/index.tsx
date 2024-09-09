import { ConfigProvider } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/main.css';
import removeTxtMaBaoVe from './utils/removeTxtMaBaoVe';

const loggedHost = 'dkmh.ctu.edu.vn';

window.addEventListener('load', () => {
	removeTxtMaBaoVe();

	if (window.location.host === loggedHost) {
		mountApp();
	}
});

/**
 * @description Mount app
 */
async function mountApp() {
	const pageHeader = document.getElementById('page-header');

	const rootId = Math.random().toString(36);

	pageHeader.outerHTML += /*html*/ `
	<div id="${rootId}"></div>
	`;

	createRoot(document.getElementById(rootId)).render(
		<ConfigProvider locale={viVN}>
			<App />
		</ConfigProvider>,
	);
}
