import { DownloadOutlined } from '@ant-design/icons';
import { Button, Space, Table, message } from 'antd';
import { Fragment, useCallback, useState } from 'react';
import studyPlanService, {
	StudyPlanType,
} from '../../services/studyPlan.service';

export interface ImportCoursesProps {
	onFinish?: () => void;
}

const ImportCourses = ({ onFinish }: ImportCoursesProps) => {
	const [loading, setLoading] = useState(false);
	const [studyPlan, setStudyPlan] = useState<StudyPlanType>({});

	const handleImport = useCallback(async () => {
		try {
			setLoading(true);
			const studyPlan = await studyPlanService.crawl();

			setStudyPlan(studyPlan);
		} catch (error) {
			message.error(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	const handleStorageStudyPlan = async () => {
		try {
			await studyPlanService.set(studyPlan);
			message.success('Nhập kế hoạch học tập thành công');
			onFinish?.();
		} catch (error) {
			message.error(error.message);
		}
	};

	return (
		<div>
			<Button
				icon={<DownloadOutlined />}
				loading={loading}
				onClick={handleImport}
			>
				Nhập kế hoạch học tập
			</Button>

			<div
				style={{
					maxHeight: '60vh',
					overflow: 'auto',
					marginBottom: 10,
				}}
			>
				{Object.keys(studyPlan).map((year) => {
					return (
						<Fragment key={year}>
							{Object.keys(studyPlan[year]).map((semester) => {
								return (
									<Fragment key={semester}>
										<Table
											size="small"
											caption={`Năm học: ${year}, Học kỳ: ${semester}`}
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
											dataSource={
												studyPlan[year][semester]
											}
											pagination={false}
										/>
									</Fragment>
								);
							})}
						</Fragment>
					);
				})}
			</div>

			<Space>
				<Button
					type="primary"
					disabled={!Object.keys(studyPlan).length}
					onClick={handleStorageStudyPlan}
				>
					Xác nhận
				</Button>

				<Button onClick={() => setStudyPlan({})}>Hủy</Button>
			</Space>
		</div>
	);
};

export default ImportCourses;
