export default function parserScoresHtml(scoreHtml: string) {
	const dom = new DOMParser().parseFromString(scoreHtml, 'text/html');

	const grades = [];

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

			const code = cells[1].textContent;
			const name = cells[2].textContent;
			const credits = Number(cells[5].textContent);
			const scoreText = cells[6].textContent;
			const score = Number(cells[7].textContent);

			const subject = {
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
