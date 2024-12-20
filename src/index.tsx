import { ConfigProvider } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import { createRoot } from 'react-dom/client';
import App from './App';
import { dkmhFeHost, loggedHost } from './constants/hosts';
import iframeService from './services/iframe.service';
import { IframeEvent, IframeEventData } from './shared/iframe';
import './styles/main.css';
import removeTxtMaBaoVe from './utils/removeTxtMaBaoVe';

window.addEventListener('load', () => {
	if (![loggedHost, dkmhFeHost].includes(window.location.host)) {
		removeTxtMaBaoVe();
	}

	if (window.location.host === loggedHost) {
		mountApp();
	}

	if (window.location.host === dkmhFeHost) {
		registerDkmhFe();
	}
});

/**
 * @description Mount app
 */
function mountApp() {
	const pageHeader = document.getElementById('page-header');

	const rootId = Math.random().toString(36);

	pageHeader.outerHTML += /*html*/ `
	<div id="${rootId}"></div>
	<iframe src="/htql/dkmh/student/dang_nhap.php" id="dkmhfe-iframe" style="display: none;"></iframe>
	`;

	createRoot(document.getElementById(rootId)).render(
		<ConfigProvider locale={viVN}>
			<App />
		</ConfigProvider>,
	);
}

function registerDkmhFe() {
	window.addEventListener(
		'message',
		async (event: MessageEvent<IframeEventData>) => {
			try {
				switch (event.data.type) {
					case IframeEvent.FindGroups: {
						const result = await iframeService.findGroups(
							event.data.data,
						);
						const res: IframeEventData = {
							type: IframeEvent.FindGroupsSuccess,
							data: result,
						};
						window.parent.window.postMessage(res, '*');
						break;
					}
					default:
						break;
				}
			} catch (error) {
				console.log(error);
			}
		},
	);
}
