import {
	BugOutlined,
	CalendarOutlined,
	CarryOutFilled,
	CarryOutOutlined,
	ChromeOutlined,
	FacebookOutlined,
	GithubOutlined,
	GlobalOutlined,
	HomeOutlined,
} from '@ant-design/icons';
import {
	Button,
	Card,
	Col,
	Descriptions,
	Row,
	Space,
	Tabs,
	TabsProps,
	Typography,
} from 'antd';
import { Content } from 'antd/es/layout/layout';
import Report from './components/Report';
import StudyPlan from './components/StudyPlan';
import Timetable from './components/Timetable';

const tabItems: TabsProps['items'] = [
	{
		key: 'home',
		label: 'CTU Extension',
		icon: <HomeOutlined />,
		children: (
			<Card style={{ margin: '10px 0' }} size="small">
				<Space>
					<Typography.Link
						target="_blank"
						href="https://ctu.thangved.com"
					>
						<Button icon={<GlobalOutlined />}>Trang chủ</Button>
					</Typography.Link>

					<Typography.Link
						target="_blank"
						href="https://chrome.google.com/webstore/detail/ctu-extension/lggkifjaacghbpebpcbaneimpogjbnmf"
					>
						<Button icon={<ChromeOutlined />}>Chrome store</Button>
					</Typography.Link>

					<Typography.Link
						target="_blank"
						href="https://github.com/thangved/ctu-extension"
					>
						<Button icon={<GithubOutlined />}>Github</Button>
					</Typography.Link>

					<Typography.Link
						target="_blank"
						href="https://fb.com/thangved"
					>
						<Button icon={<FacebookOutlined />}>Facebook</Button>
					</Typography.Link>
				</Space>
			</Card>
		),
	},
	{
		key: 'study-plan',
		label: 'Kế hoạch học tập',
		icon: <CalendarOutlined />,
		children: <StudyPlan />,
	},
	{
		key: 'timetable',
		label: 'Thời khóa biểu',
		children: <Timetable />,
		icon: <CarryOutOutlined />,
	},
	{
		key: 'report',
		label: 'Phản hồi',
		children: <Report />,
		icon: <BugOutlined />,
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
