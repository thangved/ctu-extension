(()=>{function b(){return document.querySelectorAll(".border_1")[1]}function L(){return b().querySelector("tr")}function m(){let e=b().querySelectorAll("tr");return Array.from(e).slice(1)}function c(){let t=document.getElementById("cmbNamHoc").value,e=document.getElementById("cmbHocKy").value,n=document.getElementById("txtMaMH").value,o=document.querySelector(".border_1 tr.main_3 td:nth-child(2)")?.innerText.split(":")[1].trim();return{year:t,semester:e,courseCode:n,courseName:o}}function f(){let{courseCode:t,courseName:e}=c(),n=m(),o={};for(let r of n){let s=r.querySelectorAll("td"),a={code:t,id:s[1]?.innerText.trim(),day:Number(s[2]?.innerText.trim()),start:Number(s[3]?.innerText.trim()),count:Number(s[4]?.innerText.trim()),location:s[5]?.innerText.trim(),name:e};o[a.id]||(o[a.id]=[]),o[a.id].push(a)}return o}async function i(){let t=chrome.storage.sync,{year:e,semester:n}=c();return(await t.get())[`${e}-${n}`]||{}}async function M(t){let e=await i();for(let n in e){let o=e[n];for(let r of o)if(t.day===r.day){let s=t.start,a=r.start,u=t.start+t.count-1,w=r.start+r.count-1;if(s<=a&&u>=a||s<=w&&u>=w)return t.code}}}async function v(t){let{year:e,semester:n}=c(),o=chrome.storage.sync;for(let s of t){let a=await M(s);if(a)throw new Error(`Nh\xF3m h\u1ECDc ph\u1EA7n b\u1EA1n \u0111ang ch\u1ECDn b\u1ECB tr\xF9ng v\u1EDBi h\u1ECDc ph\u1EA7n ${a}`)}let r=await i();r[t[0]?.code]=t,await o.set({[`${e}-${n}`]:r})}async function E(t){let{year:e,semester:n}=c(),o=chrome.storage.sync,r=await i();delete r[t],await o.set({[`${e}-${n}`]:r})}async function T(t){try{let e=f();await v(e[t]);let n=document.querySelectorAll(".add-course");for(let o of n)o.dataset.id===t?(o.classList.add("btn-success"),o.classList.remove("btn-primary"),o.innerText="\u0110\xE3 th\xEAm",o.disabled=!0):(o.classList.add("btn-primary"),o.classList.remove("btn-success"),o.innerText="Th\xEAm",o.disabled=!1);await l()}catch(e){alert(e)}}async function h(t){await E(t),await l()}async function x(){let t=document.querySelectorAll(".add-course");for(let e of t)e.type="button",e.addEventListener("click",()=>T(e.dataset.id))}async function H(){let t=document.querySelectorAll(".delete-course");for(let e of t)e.type="button",e.addEventListener("click",()=>h(e.dataset.id))}var G=Math.random().toString(36);function g(){let t=document.getElementById("menu0"),e=`<div class="card border ttb-wrapper sticky-top" id=${G}></div>`;t.outerHTML+=e;let o=document.getElementById("tbl0")?.querySelector("tr"),r=document.createElement("td");r.className="btn btn-outline-primary",r.innerText="M\u1EDF r\u1ED9ng",o?.appendChild(r);let s=!1;return r.addEventListener("click",()=>{p().classList.toggle("expanded"),s=!s,r.innerText=s?"Thu l\u1EA1i":"M\u1EDF r\u1ED9ng"}),e}function p(){return document.getElementById(G)}function d(t,e=""){return`<tr>
		<td>${t}</td>
		<td id="${e}-2-${t}"></td>
		<td id="${e}-3-${t}"></td>
		<td id="${e}-4-${t}"></td>
		<td id="${e}-5-${t}"></td>
		<td id="${e}-6-${t}"></td>
		<td id="${e}-7-${t}"></td>
	</tr>`}function y(){let t=p();t.innerHTML="";let{year:e,semester:n}=c(),o=`<h2 class="text-center">Th\u1EDDi kh\xF3a bi\u1EC3u</h2>
	<p class="text-center">N\u0103m h\u1ECDc: ${e}, H\u1ECDc k\u1EF3: ${n}</p>
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
			${d(1,"ttbc")}
			${d(2,"ttbc")}
			${d(3,"ttbc")}
			${d(4,"ttbc")}
			${d(5,"ttbc")}

			<tr>
				<td class="p-4" colspan="7"></td>
			</tr>

			${d(6,"ttbc")}
			${d(7,"ttbc")}
			${d(8,"ttbc")}
			${d(9,"ttbc")}
		</tbody>
	</table>`,r=p();if(!r)throw new Error("Table wrapper not found");r.innerHTML=o}async function l(){y();let t=await i();for(let e in t){let n=t[e];for(let o of n){let r=document.getElementById(`ttbc-${o.day}-${o.start}`);r.rowSpan=o.count,r.innerHTML+=`<div class="card m-0">
	<div class="card-body">
		<h5 class="card-title">${o.code} (${o.id})</h5>
		<h6 class="card-subtitle mb-2 text-body-secondary">${o.name}</h6>
		<p class="card-text">${o.location}</p>

		<button type="button" class="btn btn-danger delete-course" data-id="${o.code}">X\xF3a</button>
	</div>
</div>`;for(let s=o.start+1;s<o.start+o.count;s++)document.getElementById(`ttbc-${o.day}-${s}`).remove()}}await H()}async function $(){let{courseCode:t}=c(),e=L();e.innerHTML+="<td class='main_3' align='center'>Th\xEAm v\xE0o th\u1EDDi kh\xF3a bi\u1EC3u</td>";let n=m(),o=await i();for(let r of n){let a=r.querySelectorAll("td")[1]?.innerText.trim(),u=o[t]?.[0]?.id===a;r.innerHTML+=`<td class='level_1_1' align='center'>
			<button class='btn m-2 add-course ${u?"btn-success":"btn-primary"}' data-id='${a}' ${u?"disabled":""}>${u?"\u0110\xE3 th\xEAm":"Th\xEAm"}</button>
		</td>`}await x()}window.onload=function(){let t=document.querySelector("#table-main > tbody > tr > td:nth-child(1) > form");t&&(t.action="//qldt.ctu.edu.vn/htql/sinhvien/dang_nhap.php"),window.location.href==="https://qldt.ctu.edu.vn/htql/dkmh/student/index.php?action=dmuc_mhoc_hky"&&C()};async function C(){g(),await $(),await l()}})();
