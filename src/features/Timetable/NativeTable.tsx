/**
 * @description Render row component
 * @param props - Props of RenderRow
 * @returns Render row component
 */
const RenderRow = ({ row }: { row: number }) => {
	return (
		<tr>
			<td>{row}</td>
			<td className={`ttb-2-${row}`} />
			<td className={`ttb-3-${row}`} />
			<td className={`ttb-4-${row}`} />
			<td className={`ttb-5-${row}`} />
			<td className={`ttb-6-${row}`} />
			<td className={`ttb-7-${row}`} />
		</tr>
	);
};

/**
 * @description Native table component
 * @returns Native table component
 */
export default function NativeTable() {
	return (
		<>
			<thead>
				<tr>
					<th>Thứ/Tiết</th>
					<th>2</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
					<th>6</th>
					<th>7</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td colSpan={7}>Sáng</td>
				</tr>

				<RenderRow row={1} />
				<RenderRow row={2} />
				<RenderRow row={3} />
				<RenderRow row={4} />
				<RenderRow row={5} />

				<tr>
					<td colSpan={7}>Chiều</td>
				</tr>

				<RenderRow row={6} />
				<RenderRow row={7} />
				<RenderRow row={8} />
				<RenderRow row={9} />

				<tr>
					<td colSpan={7}>Tối</td>
				</tr>

				<RenderRow row={10} />
				<RenderRow row={11} />
				<RenderRow row={12} />
			</tbody>
		</>
	);
}
