import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';
import { dkmhApiHost } from '../constants/hosts';
import { IframeEventDataFindGroupsSuccess } from '../shared/iframe';
import { GroupType } from './group.service';

type FindGroupsParams = {
	code: string;
	year: string;
	semester: string;
};

/**
 * Iframe service
 */
class IframeService {
	private http: AxiosInstance;

	constructor() {
		this.http = axios.create({
			baseURL: `https://${dkmhApiHost}/api/v1`,
		});

		this.http.interceptors.request.use((config) => {
			config.headers.Authorization = `Bearer ${Cookies.get('access_token')}`;
			return config;
		});

		this.http.interceptors.response.use((res) => res.data);
	}

	/**
	 * Tìm kiếm lớp học phần
	 * @param param - Thông tin lớp học phần
	 */
	async findGroups({
		code,
		semester,
		year,
	}: FindGroupsParams): Promise<IframeEventDataFindGroupsSuccess['data']> {
		const result: Record<string, GroupType> = {};

		/******************************************************
		 *                  GENERATE INTERFACES               *
		 ******************************************************/

		interface Root {
			code: number;
			msg: string;
			data: Data;
		}

		interface Data {
			data: Daum[];
			tuan_max: number;
			hoc_phan_info: HocPhanInfo;
		}

		interface Daum {
			key: number;
			dkmh_tu_dien_hoc_phan_ma: string;
			dkmh_nhom_hoc_phan_ma: string;
			dkmh_tu_dien_hoc_phan_ten_vn: string;
			dkmh_tu_dien_hoc_phan_so_tin_chi: number;
			dkmh_tu_dien_phong_hoc_ten: string;
			dkmh_thu_trong_tuan_ma: number;
			dkmh_tu_dien_giang_vien_ten_vn: string;
			dkmh_tu_dien_giang_vien_email: string;
			dkmh_tu_dien_lop_hoc_phan_si_so: number;
			si_so_con_lai: number;
			tiet_hoc: string;
			'tuanhoc-1': string;
			'tuanhoc-2': string;
			'tuanhoc-3': string;
			'tuanhoc-4': string;
			'tuanhoc-5': string;
			'tuanhoc-6': string;
			'tuanhoc-7': string;
			'tuanhoc-8': string;
			'tuanhoc-9': string;
			'tuanhoc-10': string;
			'tuanhoc-11': string;
			'tuanhoc-12': string;
			'tuanhoc-13': string;
			'tuanhoc-14': string;
			'tuanhoc-15': string;
			'tuanhoc-16': string;
			'tuanhoc-17': string;
			'tuanhoc-18': string;
			'tuanhoc-19': string;
			'tuanhoc-20': string;
			'tuanhoc-21': string;
		}

		interface HocPhanInfo {
			dkmh_tu_dien_hoc_phan_ma: string;
			dkmh_tu_dien_hoc_phan_ten: string;
			dkmh_tu_dien_hoc_phan_ten_vn: string;
			dkmh_tu_dien_hoc_phan_so_tin_chi: number;
			dkmh_tu_dien_hoc_phan_so_tiet_ly_thuyet: number;
			dkmh_tu_dien_hoc_phan_so_tiet_thuc_hanh: number;
			dkmh_tu_dien_don_vi_ma: string;
		}

		/******************************************************
		 *                  GENERATE INTERFACES               *
		 ******************************************************/

		const res = (await this.http.get(
			'/dangkyhocphan/sinhvien/danhmuchocphan',
			{
				params: {
					dkmh_tu_dien_nien_khoa_nam_hoc: year,
					dkmh_tu_dien_hoc_ky_ma: semester,
					dkmh_tu_dien_hoc_phan_ma: code,
				},
			},
		)) as Root;

		for (const group of res.data.data) {
			const groupCode = `${code}${group.dkmh_nhom_hoc_phan_ma}`;
			if (!result[groupCode]) {
				result[groupCode] = {
					id: `${code}${group.dkmh_nhom_hoc_phan_ma}`,
					lecture: {
						code: group.dkmh_tu_dien_giang_vien_email,
						name: group.dkmh_tu_dien_giang_vien_ten_vn,
					},
					name: group.dkmh_tu_dien_hoc_phan_ten_vn,
					remain: group.si_so_con_lai,
					sessions: [],
					wholesale: group.dkmh_tu_dien_lop_hoc_phan_si_so,
				};
			}

			if (!group.dkmh_thu_trong_tuan_ma) continue;

			result[groupCode].sessions.push({
				day: `${group.dkmh_thu_trong_tuan_ma}`,
				lesson: group.tiet_hoc.replace(/-/g, '').length,
				location: group.dkmh_tu_dien_phong_hoc_ten,
				start: Number(
					group.tiet_hoc
						.replace(/-/g, '')
						.split('')
						.reduce(
							(prev, current, index) =>
								prev ? prev : current !== '-' ? index + 1 : 0,
							0,
						),
				),
			});
		}

		return {
			groups: result,
			params: {
				code,
				semester,
				year,
			},
		};
	}
}

export default new IframeService() as IframeService;
