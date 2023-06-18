import groupService, { GroupType } from './group.service';
import studyPlanService, { CourseType } from './studyPlan.service';

export interface CourseTypeWithGroups extends CourseType {
	groups: Record<string, GroupType>;
}

class CourseService {
	async get(year: string, semester: string) {
		const courses: CourseTypeWithGroups[] = (await studyPlanService.get())[
			year
		][semester].map((course) => ({
			...course,
			groups: {},
		}));

		for (const course of courses) {
			const groups = await groupService.find(course.code, year, semester);
			course.groups = groups;
		}

		return courses;
	}
}

export default new CourseService();
