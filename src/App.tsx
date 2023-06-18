import { Col, Row, Tabs, TabsProps } from 'antd';
import { Content } from 'antd/es/layout/layout';
import StudyPlan from './components/StudyPlan';
import Timetable from './components/Timetable';

const tabItems: TabsProps['items'] = [
	{
		key: 'home',
		label: 'CTU Extension',
	},
	{
		key: 'study-plan',
		label: 'Kế hoạch học tập',
		children: <StudyPlan />,
	},
	{
		key: 'timetable',
		label: 'Thời khóa biểu',
		children: <Timetable />,
	},
];

const App = () => {
	return (
		<>
			<Row>
				<Col sm={4}></Col>

				<Col sm={16}>
					<Content>
						<Tabs items={tabItems} defaultActiveKey="home" />
					</Content>
				</Col>

				<Col sm={4}></Col>
			</Row>
		</>
	);
};

export default App;
