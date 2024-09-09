import client from '../utils/client';
import parserScoresHtml from '../utils/parserScoresHtml';

/**
 * @description Grade service
 */
class GradeService {
	/**
	 * @description Get all grades
	 * @returns List of grades
	 */
	public async getGrades() {
		const url = '/htql/sinhvien/qldiem/codes/index.php?mID=201'; // URL get all grades

		const htmlResponse = (await client.postForm(url, {
			cmbKhoaHoc: '%',
			cmbHocKy: '%',
		})) as string;

		return parserScoresHtml(htmlResponse);
	}
}

export default new GradeService() as GradeService;
