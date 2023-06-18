import { Alert, Card, Pagination, Table } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import courseService, {
	CourseTypeWithGroups,
} from '../../services/course.service';
import timetableService, {
	TimetableSemesterType,
} from '../../services/timetable.service';
import getTimetables from '../../utils/getTimetables';
import SemesterSelector from '../SemesterSelector';
import GroupsTable from './GroupsTable';
import RenderTimetable from './RenderTimetable';

const Timetable = () => {
	const [year, setYear] = useState<string>('');
	const [semester, setSemester] = useState<string>('');
	const [courses, setCourses] = useState<CourseTypeWithGroups[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [filter, setFilter] = useState<TimetableSemesterType>({});
	const [page, setPage] = useState<number>(1);

	const fetchCourses = useCallback(async (year: string, semester: string) => {
		setLoading(true);

		const courses = await courseService.get(year, semester);

		setCourses(courses);

		setLoading(false);
	}, []);

	const fetchTimetable = useCallback(
		async (year: string, semester: string) => {
			const timetable = await timetableService.get(year, semester);

			setFilter(timetable);
		},
		[]
	);

	const timetables = useMemo(
		() => getTimetables(filter, courses),
		[filter, courses]
	);

	useEffect(() => {
		if (!year || !semester) return;

		fetchCourses(year, semester);
		fetchTimetable(year, semester);
	}, [year, semester]);

	useEffect(() => {
		const handler = () => {
			fetchTimetable(year, semester);
		};

		chrome.storage.sync.onChanged.addListener(handler);

		return () => chrome.storage.sync.onChanged.removeListener(handler);
	}, [year, semester]);

	return (
		<div>
			{timetables.length > 50 && (
				<Alert
					type="warning"
					showIcon
					message="Cảnh báo"
					description="Số lượng lịch khả dụng đang rất lớn, nếu không muốn duyệt mỏi tay thì bạn có thể chọn thêm điều kiện để giảm bớt số lượng"
				/>
			)}
			<SemesterSelector
				onChange={(year, semester) => {
					setYear(year);
					setSemester(semester);
				}}
			/>
			<Table
				size="small"
				loading={loading}
				columns={[
					{ dataIndex: 'code', title: 'Mã học phần' },
					{ dataIndex: 'name', title: 'Tên học phần' },
					{ dataIndex: 'credit', title: 'Số tín chỉ' },
					{
						dataIndex: 'code',
						title: 'Nhóm đã chọn',
						render(code) {
							return (
								filter[code]?.join(', ') ||
								'Không có nhóm nào được chọn'
							);
						},
					},
				]}
				rowKey="code"
				pagination={false}
				dataSource={courses}
				expandable={{
					expandedRowRender: (record) => (
						<GroupsTable
							record={record}
							timetable={filter}
							year={year}
							semester={semester}
						/>
					),
					expandRowByClick: true,
				}}
			/>

			<Card size="small" style={{ margin: '10px 0' }}>
				<Pagination
					size="small"
					total={timetables.length}
					current={page}
					showQuickJumper
					onChange={(page) => setPage(page)}
				/>
			</Card>

			{timetables[page - 1] && (
				<RenderTimetable
					courses={courses}
					year={year}
					semester={semester}
					key={page}
					timetable={timetables[page - 1]}
				/>
			)}
		</div>
	);
};

export default Timetable;
