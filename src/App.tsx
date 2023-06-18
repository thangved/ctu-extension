import { StarOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import { useState } from 'react';
import QuickStart from './components/QuickStart';

const App = () => {
	const [openQuickStart, setOpenQuickStart] = useState(false);

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
					</ButtonGroup>
				</Col>

				<Col sm={4}></Col>
			</Row>

			<QuickStart
				open={openQuickStart}
				onClose={() => setOpenQuickStart(false)}
			/>
		</>
	);
};

export default App;
