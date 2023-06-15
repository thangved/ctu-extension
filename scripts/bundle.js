(()=>{window.onload=function(){document.querySelector("#login-sv > tbody > tr:nth-child(3)")?.remove();let t=document.createElement("link");t.rel="stylesheet",t.href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",document.head.insertBefore(t,document.head.firstChild),document.querySelector("#table-main > tbody > tr > td:nth-child(1) > form")&&(document.querySelector("#table-main > tbody > tr > td:nth-child(1) > form").action="//qldt.ctu.edu.vn/htql/sinhvien/dang_nhap.php"),document.querySelector(".bg-module-top")&&(document.querySelector(".bg-module-top").innerHTML="<h2>\u0110\u0103ng nh\u1EADp</h2>"),window.location.href==="https://qldt.ctu.edu.vn/htql/dkmh/student/index.php?action=dmuc_mhoc_hky"&&b()};var a=async(t,d)=>(await chrome.storage.sync.get())[`${t}-${d}`]||{},l=async(t,d,e)=>{let n=chrome.storage.sync,r=await a(t,d);r[e.code]=e,await n.set({[`${t}-${d}`]:r}),console.log(await a(t,d))},u=(t,d,e)=>{let n=[];for(let r of e){let o=r.querySelectorAll("td"),c={code:d,id:o[1].innerText.trim(),day:Number(o[2].innerText.trim()),start:Number(o[3].innerText.trim()),count:Number(o[4].innerText.trim()),location:o[5].innerText.trim()},s=t[d]?.id===c.id;r.innerHTML+=`<td class='level_1_1' align='center'>
			<button class='btn m-2 add-course ${s?"btn-danger":"btn-primary"}' data-id='${c.id}'>${s?"X\xF3a":"Th\xEAm"}</button>
		</td>`,n.push(c)}return n},m=async(t,d,e)=>{let n=document.querySelectorAll(".add-course");for(let r of n)r.addEventListener("click",async o=>{o.preventDefault();let c=r.dataset.id,s=t.find(i=>i.id===c);if(s){await l(d,e,s);for(let i of n)i.dataset.id===c?(i.classList.add("btn-danger"),i.classList.remove("btn-primary"),i.innerText="X\xF3a"):(i.classList.remove("btn-danger"),i.classList.add("btn-primary"),i.innerText="Th\xEAm")}})},h=async(t,d)=>{let e=document.querySelector(".radius-01"),n=`<div class="card border p-2 my-2">
	<h2 class="text-center">Th\u1EDDi kh\xF3a bi\u1EC3u</h2>
	<p class="text-center">N\u0103m h\u1ECDc: ${t}, H\u1ECDc k\u1EF3: ${d}</p>
	<table class="table table-bordered">
		<thead>
			<tr>
				<th>Ti\u1EBFt / Th\u1EE9</th>
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
</div>`;e.innerHTML+=n};async function b(){let t=document.getElementById("cmbNamHoc").value,d=document.getElementById("cmbHocKy").value,e=document.getElementById("txtMaMH").value;if(!e)return;let n=document.querySelectorAll(".border_1")[1],r=Array.from(n.querySelectorAll("tr")),o=r[0],c=r.slice(1);o.innerHTML+="<td class='main_3' align='center'>Th\xEAm v\xE0o th\u1EDDi kh\xF3a bi\u1EC3u</td>";let s=await a(t,d),i=u(s,e,c);await m(i,t,d),await h(t,d)}})();
