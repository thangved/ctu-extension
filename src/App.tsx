import { BarsOutlined, StarOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import { useState } from 'react';
import QuickStart from './components/QuickStart';
import StudyPlan from './components/StudyPlan';

const App = () => {
	const [openQuickStart, setOpenQuickStart] = useState(false);
	const [openStudyPlan, setOpenStudyPlan] = useState(false);

	return (
		<>
			<Row>
				<Col sm={4}></Col>

				<Col sm={16}>
					<ButtonGroup>
						<Button
							type="primary"
							icon={<StarOutlined />}
							onClick={() => setOpenQuickStart(true)}
						>
							Bắt đầu nhanh
						</Button>

						<Button
							icon={<BarsOutlined />}
							onClick={() => setOpenStudyPlan(true)}
						>
							Xem kế hoạch học tập
						</Button>
					</ButtonGroup>
				</Col>

				<Col sm={4}></Col>
			</Row>

			<QuickStart
				open={openQuickStart}
				onClose={() => setOpenQuickStart(false)}
			/>

			<StudyPlan
				open={openStudyPlan}
				onClose={() => setOpenStudyPlan(false)}
			/>
		</>
	);
};

export default App;
