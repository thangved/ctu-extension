import {
	BugOutlined,
	CalendarOutlined,
	CarryOutOutlined,
	ChromeOutlined,
	DashboardOutlined,
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
import Grade from './features/Grade';
import Report from './features/Report';
import StudyPlan from './features/StudyPlan';
import Timetable from './features/Timetable';
import { useEffect, useState } from 'react';

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
		key: 'grade',
		label: 'Thống kê điểm (Mới)',
		icon: <DashboardOutlined />,
		children: <Grade />,
	},
	{
		key: 'report',
		label: 'Phản hồi',
		children: <Report />,
		icon: <BugOutlined />,
	},
];

const __ = 'ctu-extension:activeKey'; // HACK

const App = () => {
	const [activeKey, setActiveKey] = useState(() =>
		window.localStorage.getItem(__),
	);

	useEffect(() => {
		window.localStorage.setItem(__, activeKey);
	}, [activeKey]);

	return (
		<>
			<Row>
				<Col sm={4}></Col>

				<Col sm={16}>
					<Content>
						<Tabs
							items={tabItems}
							activeKey={activeKey}
							onChange={(newActiveKey) =>
								setActiveKey(newActiveKey)
							}
						/>
					</Content>
				</Col>

				<Col sm={4}></Col>
			</Row>
		</>
	);
};

export default App;
