import { Card, Spin, message } from 'antd';
import { useEffect, useState } from 'react';
import gradeService from '../../services/grade.service';
import { Grade } from '../../utils/parserScoresHtml';

export default function Grade() {
	const [isLoading, setIsLoading] = useState(false);
	const [, setGrades] = useState<Grade[]>([]);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);

				const grades = await gradeService.getGrades();
				setGrades(grades);
			} catch (error) {
				message.error(error.message);
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<Card title="Điểm học tập qua các học kỳ">
			{isLoading ? <Spin /> : <></>}
		</Card>
	);
}
