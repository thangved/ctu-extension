import { Modal, Typography } from 'antd';
import PropTypes from 'prop-types';
import ImportCourses from './ImportCourses';
import React = require('react');

export interface QuickStartProps {
	open: boolean;
	onClose: () => void;
}

export interface QuickStartStep {
	title: string;
	desciption: string;
	children: React.ReactNode;
}

const steps: QuickStartStep[] = [
	{
		title: 'Nhập kế hoạch học tập của bạn',
		desciption:
			'Nhập kế hoạch học tập của bạn vào kho dữ liệu của ứng dụng',
		children: <ImportCourses />,
	},
];

const QuickStart: React.FC<QuickStartProps> = ({ open, onClose }) => {
	const [current, setCurrent] = React.useState(0);

	const nextStep = () => {
		if (current === steps.length - 1) {
			onClose();
		}
		setCurrent((current) => (current + 1) % steps.length);
	};

	return (
		<Modal
			open={open}
			footer={false}
			title="Bắt đầu nhanh"
			centered
			width={800}
			onCancel={onClose}
		>
			<Typography.Title level={4}>
				Bước {current + 1}: {steps[current].title}
			</Typography.Title>

			<Typography.Paragraph>
				{steps[current].desciption}
			</Typography.Paragraph>

			{React.cloneElement(steps[current].children as any, {
				onFinish: nextStep,
			})}
		</Modal>
	);
};

QuickStart.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default QuickStart;
