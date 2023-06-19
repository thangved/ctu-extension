import {
	BugOutlined,
	CalendarOutlined,
	CarryOutFilled,
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
		label: (
			<span>
				<HomeOutlined />
				CTU Extension
			</span>
		),
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
		label: (
			<span>
				<CalendarOutlined />
				Kế hoạch học tập
			</span>
		),
		children: <StudyPlan />,
	},
	{
		key: 'timetable',
		label: (
			<span>
				<CarryOutFilled />
				Thời khóa biểu
			</span>
		),
		children: <Timetable />,
	},
	{
		key: 'report',
		label: (
			<span>
				<BugOutlined />
				Phản hồi
			</span>
		),
		children: <Report />,
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
