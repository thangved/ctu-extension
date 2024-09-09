import { Select, Space } from 'antd';
import Typography from 'antd/es/typography/Typography';
import { useCallback, useEffect, useMemo, useState } from 'react';
import infoService from '../../services/info.service';
import studyPlanService, {
	StudyPlanType,
} from '../../services/studyPlan.service';

export interface SemesterSelectorProps {
	onChange?: (year: string, semester: string) => void;
}

/**
 *
 * @param props - Props of SemesterSelector
 * @returns
 */
const SemesterSelector = ({ onChange }: SemesterSelectorProps) => {
	const [studyPlan, setStudyPlan] = useState<StudyPlanType>({});
	const [year, setYear] = useState<string>('');
	const [semester, setSemester] = useState<string>('');

	const fetchData = useCallback(async () => {
		const studyPlan = await studyPlanService.get();
		setStudyPlan(studyPlan);

		const { year, semester } = await infoService.get();

		setYear(year);
		setSemester(semester);
	}, []);

	useEffect(() => {
		fetchData();
	}, []);

	const years = useMemo(() => {
		return Object.keys(studyPlan);
	}, [studyPlan]);

	const semesters = useMemo(() => {
		if (!studyPlan[year]?.[semester]) {
			setSemester('1');
		}
		return Object.keys(studyPlan[year] || {});
	}, [year]);

	useEffect(() => {
		if (!year || !semester) return;
		infoService.set({ year, semester }).then(() => {
			onChange?.(year, semester);
		});
	}, [year, semester]);

	return (
		<Space style={{ marginBottom: 10, marginTop: 10 }}>
			<Typography>Năm học</Typography>

			<Select
				value={year}
				placeholder="Năm học"
				onChange={(value) => setYear(value)}
			>
				{years.map((year) => (
					<Select.Option key={year} value={year}>
						{year}
					</Select.Option>
				))}
			</Select>

			<Typography>Học kỳ</Typography>

			<Select
				value={semester}
				placeholder="Học kỳ"
				onChange={(value) => setSemester(value)}
			>
				{semesters.map((semester) => (
					<Select.Option key={semester} value={semester}>
						{semester}
					</Select.Option>
				))}
			</Select>
		</Space>
	);
};

export default SemesterSelector;
