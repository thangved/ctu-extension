import { Button, Descriptions, Space, Table, Tag } from 'antd';
import { CourseTypeWithGroups } from '../../services/course.service';
import timetableService, {
	TimetableSemesterType,
} from '../../services/timetable.service';
import { ArrowRightOutlined } from '@ant-design/icons';

interface GroupsTableProps {
	record: CourseTypeWithGroups;
	timetable: TimetableSemesterType;
	year: string;
	semester: string;
}

const GroupsTable = ({
	record,
	year,
	semester,
	timetable,
}: GroupsTableProps) => (
	<Table
		columns={[
			{
				dataIndex: 'id',
				title: 'Mã nhóm',
			},
			{
				dataIndex: 'name',
				title: 'Tên nhóm',
			},
			{
				dataIndex: 'wholesale',
				title: 'Sỉ số',
			},
			{
				dataIndex: 'remain',
				title: 'Còn lại',
			},
			{
				dataIndex: 'id',
				title: 'Ngày học',
				render(_, record) {
					return (
						<Descriptions
							size="small"
							column={1}
							bordered
							items={record.sessions.map((session) => {
								return {
									label: `Thứ ${session.day}`,
									children: (
										<Space direction="horizontal">
											<Tag color="blue">
												{session.start}
											</Tag>
											<ArrowRightOutlined />
											<Tag color="green">
												{session.start +
													session.lesson -
													1}
											</Tag>
										</Space>
									),
								};
							})}
						/>
					);
				},
			},
			{
				dataIndex: 'id',
				title: 'Chọn',
				render(id) {
					const isSelected =
						timetable[record.code] &&
						timetable[record.code].indexOf(id) !== -1;
					return (
						<Button
							size="small"
							type="primary"
							danger={isSelected}
							onClick={async () =>
								await timetableService.toggle(
									year,
									semester,
									record.code,
									id,
								)
							}
						>
							{isSelected ? 'Xóa' : 'Chọn'}
						</Button>
					);
				},
			},
		]}
		rowKey="id"
		dataSource={Object.keys(record.groups).map((key) => record.groups[key])}
		pagination={false}
		sticky
	/>
);

export default GroupsTable;
