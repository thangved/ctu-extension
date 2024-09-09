import {
	DeleteOutlined,
	InfoCircleOutlined,
	PlusOutlined,
	SyncOutlined,
} from '@ant-design/icons';
import {
	Alert,
	Button,
	Card,
	Checkbox,
	Flex,
	Pagination,
	Table,
	Tooltip,
	Typography,
	message,
	notification,
} from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { ColumnsType } from 'antd/es/table';
import Link from 'antd/es/typography/Link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import courseService, {
	CourseTypeWithGroups,
} from '../../services/course.service';
import exceptService, { ExceptType } from '../../services/except.service';
import timetableService, {
	TimetableSemesterType,
} from '../../services/timetable.service';
import getTimetables from '../../utils/getTimetables';
import SemesterSelector from '../SemesterSelector';
import Footer from './Footer';
import GroupsTable from './GroupsTable';
import RenderTimetable from './RenderTimetable';

const lengthOptions: DefaultOptionType[] = [
	{ value: 10, label: '10' },
	{ value: 100, label: '100' },
	{ value: 1000, label: '1000' },
	{ value: 2000, label: '2000' },
	{ value: 5000, label: '5000' },
	{ value: 10000, label: '10000' },
	{ value: 20000, label: '20000' },
	{ value: 50000, label: '50000' },
	{ value: 100000, label: '100000' },
	{ value: 200000, label: '200000' },
	{ value: 500000, label: '500000' },
];

/**
 * @description Get columns
 * @param filter - Filter
 * @param year - Year
 * @param semester - Semester
 * @param excepts - Excepts
 * @param courses - List of courses
 * @returns Columns
 */
const getColumns = (
	filter: Record<string, string[]>,
	year: string,
	semester: string,
	excepts: Record<string, boolean>,
	courses: CourseTypeWithGroups[],
): ColumnsType<CourseTypeWithGroups> => [
	{
		dataIndex: 'code',
		title: <Typography.Text>Mã học phần</Typography.Text>,
		render(code) {
			return <Typography.Text>{code}</Typography.Text>;
		},
	},
	{
		dataIndex: 'name',
		title: <Typography.Text>Tên học phần</Typography.Text>,
		render(name) {
			return <Typography.Text>{name}</Typography.Text>;
		},
	},
	{
		dataIndex: 'credit',
		title: <Typography.Text>Số tín chỉ</Typography.Text>,
		render(credit) {
			return <Typography.Text>{credit}</Typography.Text>;
		},
	},
	{
		dataIndex: 'code',
		title: <Typography.Text>Đã chọn</Typography.Text>,
		render(code) {
			const isFiltered = filter[code]?.length > 0;

			return isFiltered ? (
				<>
					{filter[code]?.join(', ')}{' '}
					<Button
						size="small"
						icon={<SyncOutlined />}
						onClick={async (event) => {
							event.stopPropagation();
							await timetableService.set(
								year,
								semester,
								code,
								[],
							);
						}}
					>
						Đặt lại
					</Button>
				</>
			) : (
				<>Không có nhóm nào được chọn</>
			);
		},
	},
	{
		dataIndex: 'code',
		title: (
			<Flex align="center" gap={10}>
				<Typography.Text>Loại trừ</Typography.Text>
				<Tooltip title="Chọn các ngày bạn không muốn học">
					<Button shape="circle" size="small" type="text">
						<InfoCircleOutlined />
					</Button>
				</Tooltip>
			</Flex>
		),
		render(code) {
			return (
				<div
					onClick={(event) => event.stopPropagation()}
					style={{ maxWidth: 200 }}
				>
					<Checkbox.Group
						onChange={(checked) => {
							const groups = courses.find(
								(e) => e.code === code,
							).groups;

							const _filter = Object.keys(groups)
								.map((key) => groups[key])
								.filter((group) => {
									const sessions = group.sessions;

									return sessions.every(
										(session) =>
											!checked.includes(session.day),
									);
								})
								.map((group) => group.id);

							timetableService.set(year, semester, code, _filter);
						}}
					>
						<Checkbox value="2">Thứ 2</Checkbox>
						<Checkbox value="3">Thứ 3</Checkbox>
						<Checkbox value="4">Thứ 4</Checkbox>
						<Checkbox value="5">Thứ 5</Checkbox>
						<Checkbox value="6">Thứ 6</Checkbox>
						<Checkbox value="7">Thứ 7</Checkbox>
					</Checkbox.Group>
				</div>
			);
		},
	},
	{
		dataIndex: 'code',
		title: 'Loại trừ',
		render(code) {
			const isExcept = excepts[code];

			return (
				<Button
					type={isExcept ? 'primary' : 'default'}
					icon={isExcept ? <PlusOutlined /> : <DeleteOutlined />}
					danger={!isExcept}
					onClick={async (event) => {
						event.stopPropagation();
						return await exceptService.toggle(year, semester, code);
					}}
				>
					{isExcept ? 'Đã loại' : 'Loại'}
				</Button>
			);
		},
	},
];

/**
 * @description Timetable
 */
const Timetable = () => {
	const [year, setYear] = useState<string>('');
	const [semester, setSemester] = useState<string>('');
	const [courses, setCourses] = useState<CourseTypeWithGroups[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [filter, setFilter] = useState<TimetableSemesterType>({});
	const [page, setPage] = useState<number>(1);
	const [excepts, setExcepts] = useState<ExceptType>({});
	const [maxLength, setMaxLength] = useState<number>(1000);

	const fetchCourses = useCallback(async (year: string, semester: string) => {
		try {
			setLoading(true);

			const courses = await courseService.get(year, semester);

			setCourses(courses);
		} catch (error) {
			message.error(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	const fetchTimetable = useCallback(
		async (year: string, semester: string) => {
			try {
				const timetable = await timetableService.get(year, semester);

				setFilter(timetable);
			} catch (error) {
				message.error(error.message);
			}
		},
		[],
	);

	const fetchExcepts = useCallback(async (year: string, semester: string) => {
		try {
			const excepts = await exceptService.get(year, semester);
			setExcepts(excepts);
		} catch (error) {
			message.error(error.message);
		}
	}, []);

	const timetables = useMemo(() => {
		try {
			return getTimetables(filter, courses, excepts, maxLength);
		} catch (error) {
			notification.error({ message: error.message });

			return [];
		}
	}, [filter, courses, excepts, maxLength]);

	const handleChangePage = useCallback((page: number) => setPage(page), []);
	const getRowClassName = useCallback(
		(record: CourseTypeWithGroups) =>
			excepts[record.code] ? 'ttb-removed' : '',
		[excepts],
	);

	useEffect(() => {
		if (!year || !semester) return;

		fetchCourses(year, semester);
		fetchTimetable(year, semester);
		fetchExcepts(year, semester);
	}, [year, semester]);

	useEffect(() => {
		/**
		 * @description Handle change
		 */
		const handler = async () => {
			setPage(1);
			await fetchTimetable(year, semester);
			await fetchExcepts(year, semester);
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
				footer={() => (
					<Footer
						lengthOptions={lengthOptions}
						maxLength={maxLength}
						setMaxLength={setMaxLength}
					/>
				)}
				pagination={false}
				size="small"
				loading={loading}
				rowClassName={getRowClassName}
				columns={getColumns(filter, year, semester, excepts, courses)}
				rowKey="code"
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

			{timetables.length > 1 && (
				<Card size="small" style={{ margin: '10px 0' }}>
					<Pagination
						size="small"
						total={timetables.length}
						current={page}
						pageSize={1}
						showQuickJumper
						showSizeChanger={false}
						onChange={handleChangePage}
					/>
				</Card>
			)}

			{timetables[page - 1] && (
				<RenderTimetable
					courses={courses}
					year={year}
					semester={semester}
					key={`${page}-${timetables.length}`}
					timetable={timetables[page - 1]}
				/>
			)}

			{timetables.length === 0 && (
				<Alert
					style={{ margin: '10px 0' }}
					type="error"
					showIcon
					message="Cảnh báo"
					description={
						<Typography>
							Hiện không có lịch học nào phù hợp với điều kiện bạn
							đã chọn, hãy thử loại trừ các ngày bạn không muốn
							học hoặc chọn thêm nhóm học phần.{' '}
							<Link
								href="https://ctu.thangved.com/docs"
								target="_blank"
								rel="noopener noreferrer"
							>
								Tài liệu hướng dẫn
							</Link>
						</Typography>
					}
				/>
			)}
		</div>
	);
};

export default Timetable;
