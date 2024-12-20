import { dkmhFeHost } from '../constants/hosts';
import { IframeEvent, IframeEventData } from '../shared/iframe';
import client from '../utils/client';

/**
 * @description Thông tin một buổi học của một lớp học phần
 */
export interface GroupSessionType {
	/**
	 * @description Thứ trong tuần (Thứ 2, Thứ 3, ...)
	 */
	day: string;
	/**
	 * @description Tiết bắt đầu
	 */
	start: number;
	/**
	 * @description Số tiết
	 */
	lesson: number;
	/**
	 * @description Phòng học (101/C1, 102/C1, ...)
	 */
	location: string;
}

/**
 * @description Thông tin một nhóm lớp học phần
 */
export interface GroupType {
	/**
	 * @description Tên lớp học phần
	 */
	name: string;
	/**
	 * @description Mã lớp học phần
	 */
	id: string;
	lecture: {
		code?: string;
		name?: string;
	};
	/**
	 * @description Số lượng tín chỉ
	 */
	wholesale: number;
	/**
	 * @description Số lượng chỗ còn lại
	 */
	remain: number;
	/**
	 * @description Các buổi học của lớp học phần
	 */
	sessions: GroupSessionType[];
}

/**
 * @description Service lấy thông tin lớp học phần
 */
class GroupService {
	private pendingLogin: Promise<unknown> | null = null;
	private iframe: HTMLIFrameElement = null;
	/**
	 * @description Đăng nhập vào hệ thống
	 */
	async login(): Promise<void> {
		if (this.pendingLogin) {
			await this.pendingLogin;
			return;
		}

		this.pendingLogin = new Promise((resolve) => {
			this.iframe = document.getElementById(
				'dkmhfe-iframe',
			) as HTMLIFrameElement;
			this.iframe.addEventListener('load', () => {
				resolve(null);
			});
		});

		await this.pendingLogin;
	}

	/**
	 * @description Lấy thông tin lớp học phần
	 * @param code - Mã môn học
	 * @param year - Năm học
	 * @param semester - Học kỳ
	 * @returns
	 */
	async find(
		code: string,
		year: string,
		semester: string,
	): Promise<Record<string, GroupType>> {
		await this.login();

		return new Promise<Record<string, GroupType>>((resolve) => {
			year = year.split('-')[0];

			const params: IframeEventData = {
				type: IframeEvent.FindGroups,
				data: {
					code,
					year,
					semester,
				},
			};

			const handler = async (event: MessageEvent<IframeEventData>) => {
				switch (event.data.type) {
					case IframeEvent.FindGroupsSuccess: {
						const {
							data: { groups, params },
						} = event.data;

						if (params.code !== code) break;
						if (params.year !== year) break;
						if (params.semester !== semester) break;
						console.log(groups);
						resolve(groups);
						this.iframe.removeEventListener('message', handler);
						break;
					}
					default:
						break;
				}
			};

			window.addEventListener('message', handler);

			// Lấy thông tin lớp học phần
			this.iframe.contentWindow.postMessage(
				params,
				`https://${dkmhFeHost}`,
			);
		});
	}
}

export default new GroupService() as GroupService;
