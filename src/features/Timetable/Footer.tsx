import { InfoCircleTwoTone } from '@ant-design/icons';
import { AutoComplete, Popover, Space, Typography } from 'antd';
import { DefaultOptionType } from 'antd/es/select';

export type FooterProps = {
	maxLength: number;
	setMaxLength: (value: number) => void;
	lengthOptions: DefaultOptionType[];
};

export default function Footer({
	lengthOptions,
	maxLength,
	setMaxLength,
}: Readonly<FooterProps>) {
	return (
		<Space>
			<Typography.Text>Giới hạn tính</Typography.Text>
			<AutoComplete
				placeholder="Giới hạn tính"
				value={maxLength}
				style={{ width: 200 }}
				options={lengthOptions}
				onSelect={(value) => setMaxLength(value)}
			/>

			<Popover
				title="Lưu ý"
				content="Giới hạn quá cao có thể gây ra tình trạng tràn bộ nhớ"
			>
				<InfoCircleTwoTone />
			</Popover>
		</Space>
	);
}
