import { SyncOutlined } from '@ant-design/icons';
import { Button, Card, Select, Space, Table, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Fragment, useCallback, useEffect, useState } from 'react';
import studyPlanService, {
	CourseType,
	StudyPlanType,
} from '../../services/studyPlan.service';
import SemesterSelector from '../SemesterSelector';

interface RenderTableProps {
	year: string;
	semester: string;
	studyPlan: CourseType[];
}

const RenderTable = ({ year, semester, studyPlan }: RenderTableProps) => {
	return (
		<Card style={{ marginTop: 10 }}>
			<Table
				key="code"
				size="small"
				caption={`Năm học: ${year}, Học kỳ: ${semester}`}
				rowKey="code"
				columns={[
					{
						dataIndex: 'code',
						title: 'Mã học phần',
					},
					{
						dataIndex: 'name',
						title: 'Tên học phần',
					},
					{
						dataIndex: 'credit',
						title: 'Số tín chỉ',
					},
				]}
				dataSource={studyPlan}
				pagination={false}
			/>
			<Typography>
				Tổng số tín chỉ:{' '}
				{studyPlan?.reduce((prev, current) => prev + current.credit, 0)}
			</Typography>
		</Card>
	);
};

const StudyPlan = () => {
	const [studyPlan, setStudyPlan] = useState<StudyPlanType>({});
	const [view, setView] = useState<'all' | 'semester'>('semester');
	const [year, setYear] = useState<string>('');
	const [semester, setSemester] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const fetchData = useCallback(async () => {
		setLoading(true);
		const studyPlan = await studyPlanService.get();
		setStudyPlan(studyPlan);
		setLoading(false);
	}, []);

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Space>
				<Button
					icon={<SyncOutlined />}
					loading={loading}
					type="primary"
					onClick={fetchData}
				>
					Cập nhật
				</Button>

				<Typography.Text>Chế độ xem</Typography.Text>

				<Select
					value={view}
					placeholder="Chế độ xem"
					onChange={(value) => setView(value)}
				>
					<Select.Option value="all">Toàn bộ</Select.Option>
					<Select.Option value="semester">Học kỳ</Select.Option>
				</Select>

				{view === 'semester' && (
					<SemesterSelector
						onChange={(year, semester) => {
							setYear(year);
							setSemester(semester);
						}}
					/>
				)}
			</Space>

			<Content>
				{view === 'all' ? (
					Object.keys(studyPlan).map((year) => {
						return (
							<Fragment key={year}>
								{Object.keys(studyPlan[year]).map(
									(semester) => {
										return (
											<RenderTable
												key={semester}
												year={year}
												semester={semester}
												studyPlan={
													studyPlan[year][semester]
												}
											/>
										);
									}
								)}
							</Fragment>
						);
					})
				) : (
					<>
						<RenderTable
							year={year}
							semester={semester}
							studyPlan={studyPlan[year]?.[semester]}
						/>
					</>
				)}
			</Content>
		</>
	);
};

export default StudyPlan;
