import { Button, Typography } from 'antd';

const Report = () => {
	return (
		<div>
			<Typography.Title level={2}>Phản hồi</Typography.Title>

			<Typography.Paragraph>
				Nếu bạn gặp bất kỳ lỗi nào trong quá trình sử dụng, hãy gửi phản
				hồi tại đây để chúng tôi có thể khắc phục sớm nhất có thể.
			</Typography.Paragraph>

			<Typography.Link
				href="https://forms.gle/NEbFq2njvNbRFbz99"
				target="_blank"
			>
				<Button type="primary">Phản hồi</Button>
			</Typography.Link>
		</div>
	);
};

export default Report;
