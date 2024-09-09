import { SaveOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Card, message } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import { useEffect, useRef } from 'react';
import { renderToString } from 'react-dom/server';
import COLORS from '../../constants/colors';
import { CourseTypeWithGroups } from '../../services/course.service';
import timetableService, {
	TimetableSemesterType,
} from '../../services/timetable.service';

export interface RenderTimetableProps {
	timetable: Record<string, string>;
	courses: CourseTypeWithGroups[];
	year: string;
	semester: string;
}

/**
 * @description Render row component
 * @param props - Props of RenderRow
 * @returns Render row component
 */
const RenderRow = ({ row }: { row: number }) => {
	return (
		<tr>
			<td>{row}</td>
			<td className={`ttb-2-${row}`} />
			<td className={`ttb-3-${row}`} />
			<td className={`ttb-4-${row}`} />
			<td className={`ttb-5-${row}`} />
			<td className={`ttb-6-${row}`} />
			<td className={`ttb-7-${row}`} />
		</tr>
	);
};

/**
 * @description Render timetable component
 * @param props - Props of RenderTimetable
 * @returns Render timetable component
 */
const RenderTimetable = ({
	timetable,
	courses,
	year,
	semester,
}: RenderTimetableProps) => {
	const tableRef = useRef<HTMLTableElement>(null);

	/**
	 * @description Select timetable
	 */
	const handleSelectTimetable = async () => {
		try {
			const _timetable: TimetableSemesterType = {};

			for (const courseCode in timetable) {
				const groupId = timetable[courseCode];

				_timetable[courseCode] = [groupId];
			}

			await timetableService.setSemester(year, semester, _timetable);

			message.success('Lưu thành công');
		} catch (error) {
			message.error(error.message);
		}
	};

	/**
	 * @description Reset timetable
	 */
	const handleReset = async () => {
		try {
			await timetableService.setSemester(year, semester, {});

			message.success('Đặt lại thành công');
		} catch (error) {
			message.error(error.message);
		}
	};

	useEffect(() => {
		const courseCodes = Object.keys(timetable);
		for (let i = 0; i < courseCodes.length; i++) {
			const courseCode = courseCodes[i];

			const groupId = timetable[courseCode];

			const course = courses.find((course) => course.code === courseCode);

			if (!course) continue;

			const group = course.groups[groupId];

			if (!group) continue;

			for (const session of group.sessions) {
				const cell = tableRef.current.querySelector(
					`.ttb-${session.day}-${session.start}`,
				) as HTMLTableCellElement;

				cell.rowSpan = session.lesson;
				cell.classList.add('ttb-course');
				cell.style.backgroundColor = COLORS[i % COLORS.length];

				cell.innerHTML = renderToString(
					<>
						<h5>Nhóm {group.id}</h5>

						<h4>
							{course.name} ({course.code})
						</h4>

						<h5>Phòng {session.location}</h5>

						<h5>Sỉ số {group.wholesale}</h5>

						<h5>Còn lại {group.remain}</h5>
					</>,
				);

				for (let i = 1; i < session.lesson; i++) {
					const cell = tableRef.current.querySelector(
						`.ttb-${session.day}-${session.start + i}`,
					) as HTMLTableCellElement;

					cell.style.display = 'none';
				}
			}
		}
	}, [timetable]);

	return (
		<Card size="small" style={{ margin: '10px 0' }}>
			<ButtonGroup>
				<Button
					type="primary"
					icon={<SaveOutlined />}
					onClick={handleSelectTimetable}
				>
					Lưu
				</Button>

				<Button icon={<SyncOutlined />} onClick={handleReset}>
					Đặt lại
				</Button>
			</ButtonGroup>

			<table className="ttb-table" ref={tableRef}>
				<thead>
					<tr>
						<th>Thứ/Tiết</th>
						<th>2</th>
						<th>3</th>
						<th>4</th>
						<th>5</th>
						<th>6</th>
						<th>7</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td colSpan={7}>Sáng</td>
					</tr>

					<RenderRow row={1} />
					<RenderRow row={2} />
					<RenderRow row={3} />
					<RenderRow row={4} />
					<RenderRow row={5} />

					<tr>
						<td colSpan={7}>Chiều</td>
					</tr>

					<RenderRow row={6} />
					<RenderRow row={7} />
					<RenderRow row={8} />
					<RenderRow row={9} />

					<tr>
						<td colSpan={7}>Tối</td>
					</tr>

					<RenderRow row={10} />
					<RenderRow row={11} />
					<RenderRow row={12} />
				</tbody>
			</table>
		</Card>
	);
};

export default RenderTimetable;
