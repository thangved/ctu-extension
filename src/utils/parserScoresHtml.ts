export type Subject = {
	code: string;
	name: string;
	credits: number;
	scoreText: string;
	score: number;
};

export type Grade = {
	year: string;
	semester: string;
	average: number;
	gpa: number;
	credits: number;
	totalCredits: number;
	subjects: Subject[];
};

export default function parserScoresHtml(scoreHtml: string): Grade[] {
	const dom = new DOMParser().parseFromString(scoreHtml, 'text/html');

	const grades: Grade[] = [];

	const tables = dom.querySelectorAll(
		'form[name="frmXemDiem"] > table',
	) as NodeListOf<HTMLTableElement>;

	for (let i = 1; i < tables.length - 1; i++) {
		const firstRow = tables[i].querySelector(
			'tr:first-child',
		) as HTMLTableRowElement;
		const firstRowCenterCell = firstRow.querySelectorAll('td')[1];

		const semester = firstRowCenterCell.textContent.split(' ')[4];
		const year =
			firstRowCenterCell.textContent.split(' ')[7] +
			' - ' +
			firstRowCenterCell.textContent.split(' ')[9];

		const subjectsTable = tables[i].querySelector('table');
		const subjectRows = subjectsTable.querySelectorAll('tr');

		const subjects = [];

		for (let j = 1; j < subjectRows.length; j++) {
			const cells = subjectRows[j].querySelectorAll('td');

			const code = cells[1].textContent.trim();
			const name = cells[2].textContent.trim();
			const credits = Number(cells[5].textContent);
			const scoreText = cells[6].textContent.trim();
			const score = Number(cells[7].textContent);

			const subject: Subject = {
				code,
				name,
				credits,
				scoreText,
				score,
			};

			subjects.push(subject);
		}

		const scoreTable = tables[i].querySelector('table + table');

		let average = 0;
		let gpa = 0;
		let credits = 0;
		let totalCredits = 0;

		if (scoreTable) {
			const cells = scoreTable.querySelectorAll('td');

			credits = Number(cells[1].textContent);
			average = Number(cells[3].textContent);
			credits = Number(cells[5].textContent);
			gpa = Number(cells[7].textContent);
			totalCredits = Number(cells[9].textContent);
		} else if (grades[i - 2]) {
			average = grades[i - 2].average;
			gpa = grades[i - 2].gpa;
			credits = grades[i - 2].credits;
			totalCredits = grades[i - 2].totalCredits;
		}

		grades.push({
			semester,
			year,
			subjects,
			credits,
			gpa,
			average,
			totalCredits,
		});
	}

	return grades;
}
