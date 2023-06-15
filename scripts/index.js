window.onload = function () {
	document.querySelector('#login-sv > tbody > tr:nth-child(3)')?.remove();
	// Load css
	const css = document.createElement('link');
	css.rel = 'stylesheet';
	css.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
	document.head.insertBefore(css, document.head.firstChild);

	if (document.querySelector('#table-main > tbody > tr > td:nth-child(1) > form'))
		document.querySelector('#table-main > tbody > tr > td:nth-child(1) > form').action =
			'//qldt.ctu.edu.vn/htql/sinhvien/dang_nhap.php';

	if (document.querySelector('.bg-module-top'))
		document.querySelector('.bg-module-top').innerHTML = '<h2>Đăng nhập</h2>';

	if (
		window.location.href ===
		'https://qldt.ctu.edu.vn/htql/dkmh/student/index.php?action=dmuc_mhoc_hky'
	) {
		startTimeTable();
	}
};

const getGroups = async (year, semester) => {
	const store = chrome.storage.sync;

	const groups = await store.get();

	return groups[`${year}-${semester}`] || {};
};

const addGroup = async (year, semester, group) => {
	const store = chrome.storage.sync;

	const groups = await getGroups(year, semester);

	groups[group.code] = group;

	await store.set({ [`${year}-${semester}`]: groups });

	console.log(await getGroups(year, semester));
};

const getGroupsData = (courseGroups, courseCode, groupsRows) => {
	const groups = [];
	for (const group of groupsRows) {
		const tds = group.querySelectorAll('td');

		const groupData = {
			code: courseCode,
			id: tds[1].innerText.trim(),
			day: Number(tds[2].innerText.trim()),
			start: Number(tds[3].innerText.trim()),
			count: Number(tds[4].innerText.trim()),
			location: tds[5].innerText.trim(),
		};

		const added = !!(courseGroups[courseCode]?.id === groupData.id);

		group.innerHTML += /*html*/ `<td class='level_1_1' align='center'>
			<button class='btn m-2 add-course ${added ? 'btn-danger' : 'btn-primary'}' data-id='${
			groupData.id
		}'>${added ? 'Xóa' : 'Thêm'}</button>
		</td>`;

		groups.push(groupData);
	}

	return groups;
};

const addButtonsClickEvent = async (groups, year, semester) => {
	const addButtons = document.querySelectorAll('.add-course');

	for (const btn of addButtons) {
		btn.addEventListener('click', async (event) => {
			event.preventDefault();

			const groupId = btn.dataset.id;
			const group = groups.find((group) => group.id === groupId);

			if (!group) return;

			await addGroup(year, semester, group);

			for (const btn of addButtons) {
				if (btn.dataset.id === groupId) {
					btn.classList.add('btn-danger');
					btn.classList.remove('btn-primary');
					btn.innerText = 'Xóa';
				} else {
					btn.classList.remove('btn-danger');
					btn.classList.add('btn-primary');
					btn.innerText = 'Thêm';
				}
			}
		});
	}
};

const addTimeTableHtml = async (year, semester) => {
	/**
	 * @type {HTMLDivElement}
	 */
	const container = document.querySelector('.radius-01');

	const tableHtml = /*html*/ `<div class="card border p-2 my-2">
	<h2 class="text-center">Thời khóa biểu</h2>
	<p class="text-center">Năm học: ${year}, Học kỳ: ${semester}</p>
	<table class="table table-bordered">
		<thead>
			<tr>
				<th>Tiết / Thứ</th>
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
				<td>1</td>
				<td id="2-1"></td>
				<td id="3-1"></td>
				<td id="4-1"></td>
				<td id="5-1"></td>
				<td id="6-1"></td>
				<td id="7-1"></td>
			</tr>

			<tr>
				<td>2</td>
				<td id="2-2"></td>
				<td id="3-2"></td>
				<td id="4-2"></td>
				<td id="5-2"></td>
				<td id="6-2"></td>
				<td id="7-2"></td>
			</tr>

			<tr>
				<td>3</td>
				<td id="2-3"></td>
				<td id="3-3"></td>
				<td id="4-3"></td>
				<td id="5-3"></td>
				<td id="6-3"></td>
				<td id="7-3"></td>
			</tr>

			<tr>
				<td>4</td>
				<td id="2-4"></td>
				<td id="3-4"></td>
				<td id="4-4"></td>
				<td id="5-4"></td>
				<td id="6-4"></td>
				<td id="7-4"></td>
			</tr>

			<tr>
				<td>5</td>
				<td id="2-5"></td>
				<td id="3-5"></td>
				<td id="4-5"></td>
				<td id="5-5"></td>
				<td id="6-5"></td>
				<td id="7-5"></td>
			</tr>

			<tr>
				<td class="p-4" colspan="7"></td>
			</tr>

			<tr>
				<td>6</td>
				<td id="2-6"></td>
				<td id="3-6"></td>
				<td id="4-6"></td>
				<td id="5-6"></td>
				<td id="6-6"></td>
				<td id="7-6"></td>
			</tr>

			<tr>
				<td>7</td>
				<td id="2-7"></td>
				<td id="3-7"></td>
				<td id="4-7"></td>
				<td id="5-7"></td>
				<td id="6-7"></td>
				<td id="7-7"></td>
			</tr>

			<tr>
				<td>8</td>
				<td id="2-8"></td>
				<td id="3-8"></td>
				<td id="4-8"></td>
				<td id="5-8"></td>
				<td id="6-8"></td>
				<td id="7-8"></td>
			</tr>

			<tr>
				<td>9</td>
				<td id="2-9"></td>
				<td id="3-9"></td>
				<td id="4-9"></td>
				<td id="5-9"></td>
				<td id="6-9"></td>
				<td id="7-9"></td>
			</tr>
		</tbody>
	</table>
</div>`;

	container.innerHTML += tableHtml;
};

async function startTimeTable() {
	// Get year and semester
	/**
	 * @type {string}
	 */
	const year = document.getElementById('cmbNamHoc').value;

	/**
	 * @type {string}
	 */
	const semester = document.getElementById('cmbHocKy').value;

	/**
	 * @type {string}
	 */
	const courseCode = document.getElementById('txtMaMH').value;

	if (!courseCode) return;

	/**
	 * @type {HTMLTableElement}
	 */
	const groupsTable = document.querySelectorAll('.border_1')[1];

	const allRow = Array.from(groupsTable.querySelectorAll('tr'));

	const header = allRow[0];

	const groupsRows = allRow.slice(1);

	header.innerHTML += /*html*/ `<td class='main_3' align='center'>Thêm vào thời khóa biểu</td>`;

	const courseGroups = await getGroups(year, semester);

	const groups = getGroupsData(courseGroups, courseCode, groupsRows);

	await addButtonsClickEvent(groups, year, semester);

	await addTimeTableHtml(year, semester);
}
