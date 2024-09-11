import { SaveOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Card, message } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import { useCallback, useEffect, useRef } from 'react';
import { renderToString } from 'react-dom/server';
import COLORS from '../../constants/colors';
import { CourseTypeWithGroups } from '../../services/course.service';
import timetableService, {
	TimetableSemesterType,
} from '../../services/timetable.service';
import NativeTable from './NativeTable';

export interface RenderTimetableProps {
	timetable: Record<string, string>;
	courses: CourseTypeWithGroups[];
	year: string;
	semester: string;
}

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
	const handleSelectTimetable = useCallback(async () => {
		try {
			const _timetable: TimetableSemesterType = {};

			for (const courseCode in timetable) {
				if (!timetable[courseCode]) continue;
				const groupId = timetable[courseCode];
				_timetable[courseCode] = [groupId];
			}

			await timetableService.setSemester(year, semester, _timetable);

			message.success('Lưu thành công');
		} catch (error) {
			message.error(error.message);
		}
	}, [year, semester, timetable]);

	/**
	 * @description Reset timetable
	 */
	const handleReset = useCallback(async () => {
		try {
			await timetableService.setSemester(year, semester, {});

			message.success('Đặt lại thành công');
		} catch (error) {
			message.error(error.message);
		}
	}, [year, semester]);

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
				<NativeTable />
			</table>
		</Card>
	);
};

export default RenderTimetable;
