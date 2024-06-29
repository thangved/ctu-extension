import groupService, { GroupType } from './group.service';
import studyPlanService, { CourseType } from './studyPlan.service';

/**
 * @description Thông tin môn học và các lớp hóc phần của môn học đó
 */
export interface CourseTypeWithGroups extends CourseType {
	/**
	 * @description Các lớp học phần của môn học
	 */
	groups: Record<string, GroupType>;
}

/**
 * @description Service lấy thông tin môn học và các lớp học phần của môn học đó
 */
class CourseService {
	/**
	 * @description Lấy thông tin môn học và các lớp học phần của môn học đó
	 * @param year - Năm học
	 * @param semester - Học kỳ
	 * @returns Thông tin môn học và các lớp học phần của môn học đó
	 */
	async get(year: string, semester: string): Promise<CourseTypeWithGroups[]> {
		const courses: CourseTypeWithGroups[] = (await studyPlanService.get())[
			year
		][semester].map((course) => ({
			...course,
			groups: {},
		}));

		await groupService.login();

		await Promise.all(
			courses.map(async (course) => {
				const groups = await groupService.find(
					course.code,
					year,
					semester,
				);
				course.groups = groups;
			}),
		);

		return courses;
	}
}

export default new CourseService() as CourseService;
