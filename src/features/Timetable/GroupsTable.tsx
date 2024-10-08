import { Button, Table, Timeline, Typography } from 'antd';
import { CourseTypeWithGroups } from '../../services/course.service';
import timetableService, {
	TimetableSemesterType,
} from '../../services/timetable.service';
import { useCallback } from 'react';

interface GroupsTableProps {
	record: CourseTypeWithGroups;
	timetable: TimetableSemesterType;
	year: string;
	semester: string;
}

/**
 * @description Groups table component
 * @param props - Props of GroupsTable
 * @returns Groups table component
 */
const GroupsTable = ({
	record,
	year,
	semester,
	timetable,
}: GroupsTableProps) => {
	const getHandleToggle = useCallback(
		(id: string) => async () => {
			await timetableService.toggle(year, semester, record.code, id);
		},
		[],
	);

	return (
		<Table
			size="small"
			columns={[
				{
					dataIndex: 'id',
					title: <Typography.Text>Mã nhóm</Typography.Text>,
					render(id) {
						return <Typography.Text>{id}</Typography.Text>;
					},
				},
				{
					dataIndex: 'name',
					title: <Typography.Text>Tên nhóm</Typography.Text>,
					render(name) {
						return <Typography.Text>{name}</Typography.Text>;
					},
				},
				{
					dataIndex: 'lecture',
					title: <Typography.Text>Giảng viên</Typography.Text>,
					render(lecture) {
						return (
							<Typography.Text>
								{lecture.code} - {lecture.name}
							</Typography.Text>
						);
					},
				},
				{
					dataIndex: 'wholesale',
					title: <Typography.Text>Sĩ số</Typography.Text>,
					render(wholesale, record) {
						return (
							<Typography.Text>
								{record.remain}/{wholesale}
							</Typography.Text>
						);
					},
				},
				{
					dataIndex: 'id',
					title: <Typography.Text>Thời gian</Typography.Text>,
					render(_, record) {
						return (
							<Timeline
								mode="left"
								style={{ padding: 10 }}
								items={record.sessions.map(
									(session, index) => ({
										label: `Thứ ${session.day}`,
										children: (
											<div
												style={{
													display: 'flex',
													flexDirection: 'column',
													gap: 5,
													background: '#ddd',
													padding: 10,
													borderRadius: 10,
												}}
											>
												<Typography.Text strong>
													{session.location}
												</Typography.Text>
												<Typography.Text>
													Tiết {session.start} -{' '}
													{session.start +
														session.lesson -
														1}
												</Typography.Text>
											</div>
										),
										key: index,
									}),
								)}
							/>
						);
					},
					width: 300,
				},
				{
					dataIndex: 'id',
					title: <Typography.Text>Chọn</Typography.Text>,
					render(id) {
						const isSelected =
							timetable[record.code] &&
							timetable[record.code].indexOf(id) !== -1;

						return (
							<Button
								type="primary"
								danger={isSelected}
								onClick={getHandleToggle(id)}
							>
								{isSelected ? 'Xóa' : 'Chọn'}
							</Button>
						);
					},
					fixed: 'right',
					align: 'center',
				},
			]}
			rowKey="id"
			dataSource={Object.keys(record.groups).map(
				(key) => record.groups[key],
			)}
			pagination={false}
			sticky
			bordered
		/>
	);
};

export default GroupsTable;
