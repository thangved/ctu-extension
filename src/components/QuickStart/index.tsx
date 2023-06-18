import { Modal, Steps } from 'antd';
import PropTypes from 'prop-types';
import React = require('react');

export interface QuickStartProps {
	open: boolean;
	onClose: () => void;
}

const QuickStart: React.FC<QuickStartProps> = ({ open, onClose }) => {
	return (
		<Modal
			open={open}
			closable={false}
			footer={false}
			title="Bắt đầu nhanh"
			centered
			onCancel={onClose}
		>
			<Steps
				items={[
					{
						title: 'Nhập kế hoạch học tập',
						description:
							'Vào trang xem kế hoạch học tập và chọn nhập kế hoạch hoc tập',
					},
				]}
			/>
		</Modal>
	);
};

QuickStart.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default QuickStart;
