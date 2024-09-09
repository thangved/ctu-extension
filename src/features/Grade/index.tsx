import { Card, Col, Row, Spin, message } from 'antd';
import * as Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import { useEffect, useState } from 'react';
import gradeService from '../../services/grade.service';
import { Grade, Subject } from '../../utils/parserScoresHtml';
import React = require('react');

const scoreTextList = ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'];

function countScoreText(
	scoreText: string,
	grades: Grade[],
	withCredits = false,
) {
	return grades.reduce((prev, current) => {
		return (
			prev +
			current.subjects.reduce((prev, current) => {
				return (
					prev +
					(current.scoreText === scoreText ? 1 : 0) *
						(withCredits ? current.credits : 1)
				);
			}, 0)
		);
	}, 0);
}

export default function Grade() {
	const [isLoading, setIsLoading] = useState(false);
	const [grades, setGrades] = useState<Grade[]>([]);

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

	const subjects: Subject[] = React.useMemo(
		() =>
			grades.reduce(
				(prev, { subjects }) => [
					...prev,
					...subjects.reduce(
						(prev, subject) =>
							subject.code === 'SHCVHT'
								? prev
								: [...prev, subject],
						[],
					),
				],
				[],
			),
		[grades],
	);

	console.log(subjects);

	return (
		<Card title="Điểm học tập qua các học kỳ">
			{isLoading ? (
				<Spin />
			) : (
				<Row>
					<Col md={24} lg={12}>
						<HighchartsReact
							highcharts={Highcharts}
							options={{
								title: {
									text: 'Điểm trung bình và tích lũy qua các học kỳ',
								},
								series: [
									{
										data: grades.map(
											(grade) => grade.average,
										),
										type: 'column',
										name: 'Điểm trung bình',
									},
									{
										data: grades.map((grade) => grade.gpa),
										name: 'Điểm trung bình tích lũy',
										color: 'red',
									},
								],
								xAxis: {
									categories: grades.map(
										(grade) =>
											`${grade.semester} - ${grade.year}`,
									),
								},
								yAxis: {
									title: {
										text: 'Điểm',
									},
									min: 0,
									max: 4,
								},
								accessibility: {
									enabled: false,
								},
							}}
						/>
					</Col>
					<Col md={24} lg={12}>
						<HighchartsReact
							highcharts={Highcharts}
							options={{
								title: {
									text: 'Số tín chỉ tích lũy qua các học kỳ',
								},
								series: [
									{
										data: grades.map(
											(grade) => grade.credits,
										),
										name: 'Số tín chỉ tích lũy trong học kỳ',
										type: 'column',
									},
									{
										data: grades.map(
											(grade) => grade.totalCredits,
										),
										name: 'Tổng số tín chỉ',
										color: 'green',
									},
								],
								yAxis: {
									title: {
										text: 'Tín chỉ',
									},
								},
								xAxis: {
									categories: grades.map(
										(grade) =>
											`${grade.semester} - ${grade.year}`,
									),
								},
								accessibility: {
									enabled: false,
								},
							}}
						/>
					</Col>

					<Col md={24} lg={12}>
						<HighchartsReact
							highcharts={Highcharts}
							options={{
								title: {
									text: 'Thống kê theo điểm chữ',
								},
								chart: {
									type: 'pie',
								},
								series: [
									{
										name: 'Số lượng',
										colorByPoint: true,
										data: scoreTextList.map(
											(scoreText) => ({
												y: countScoreText(
													scoreText,
													grades,
												),
												name: scoreText,
											}),
										),
									},
								],
								accessibility: {
									enabled: false,
								},
							}}
						/>

						<HighchartsReact
							highcharts={Highcharts}
							options={{
								title: {
									text: 'Thống kê theo điểm chữ * tín chỉ',
								},
								chart: {
									type: 'pie',
								},
								series: [
									{
										name: 'Số lượng',
										colorByPoint: true,
										data: scoreTextList.map(
											(scoreText) => ({
												y: countScoreText(
													scoreText,
													grades,
													true,
												),
												name: scoreText,
											}),
										),
									},
								],
								accessibility: {
									enabled: false,
								},
							}}
						/>
					</Col>

					<Col md={24} lg={12}>
						{!!subjects.length && (
							<HighchartsReact
								highcharts={Highcharts}
								options={{
									title: {
										text: 'Điểm các môn',
									},
									plotOptions: {
										bar: {
											dataLabels: {
												enabled: true,
											},
											groupPadding: 0.1,
										},
										series: {
											pointWidth: 10,
										},
									},
									chart: {
										height: subjects.length * 20,
									},
									series: [
										{
											data: subjects.map(
												(sub) => sub.score,
											),
											name: 'Điểm',
											type: 'bar',
										},
									],
									yAxis: {
										title: {
											text: 'Điểm',
										},
										min: 0,
										max: 10,
									},
									xAxis: {
										categories: subjects.map(
											(sub) => sub.name,
										),
									},
									accessibility: {
										enabled: false,
									},
								}}
							/>
						)}
					</Col>
					<Col xs={24} />
				</Row>
			)}
		</Card>
	);
}
