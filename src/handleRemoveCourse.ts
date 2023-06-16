import addGroupToTable from './addGroupToTable';
import { removeCourse } from './store';

export default async function handleRemoveCourse(courseCode: string) {
	await removeCourse(courseCode);

	await addGroupToTable();
}
