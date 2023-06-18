import { DownloadOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table } from 'antd';
import { Fragment, useCallback, useEffect, useState } from 'react';
import studyPlanService, {
	StudyPlanType,
} from '../../services/studyPlan.service';
import ImportCourses from '../QuickStart/ImportCourses';

export interface StudyPlanProps {
	open: boolean;
	onClose: () => void;
}

const StudyPlan = ({ open, onClose }: StudyPlanProps) => {
	const [studyPlan, setStudyPlan] = useState<StudyPlanType>({});
	const [importing, setImporting] = useState(false);

	const fetchData = useCallback(async () => {
		const studyPlan = await studyPlanService.get();
		setStudyPlan(studyPlan);
	}, []);

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Modal
				title="Kế hoạch học tập"
				width={800}
				open={open}
				footer={false}
				onCancel={onClose}
			>
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
								{Object.keys(studyPlan[year]).map(
									(semester) => {
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
														studyPlan[year][
															semester
														]
													}
													pagination={false}
												/>
											</Fragment>
										);
									}
								)}
							</Fragment>
						);
					})}
				</div>

				<Space style={{ marginBottom: 10 }}>
					<Button
						type="primary"
						icon={<DownloadOutlined />}
						onClick={() => setImporting(true)}
					>
						Nhập lại
					</Button>
				</Space>

				{importing && (
					<ImportCourses
						onFinish={() => {
							setImporting(false);
							fetchData();
						}}
					/>
				)}
			</Modal>
		</>
	);
};

export default StudyPlan;
