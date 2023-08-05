function check() {
	let checkDate = document.getElementById("date").value;
	let checkText = document.getElementById("text").value;
	
	function dateToNumber(date) {
		let dtn = date.replace(/-/gi,"");
		let dtnb;
		let dtnc = 0;
		for (dtnb in dtn) {
			let dtnd = Number(dtn[dtnb]);
			dtnc += dtnd;
			}
			date = dtnc % 9;
			if (date == 0) {
				date = 9;
				}
		return date;
		}

	let nDate = Number(dateToNumber(checkDate));
	let inputDN = document.getElementById("ndate").value = nDate;
	
	function letterToNumber(text) {
		const a = {"A":"1","B":"2","C":"3","D":"4","E":"5","F":"6","G":"7","H":"8","I":"9","J":"1","K":"2","L":"3","M":"4","N":"5","O":"6","P":"7","Q":"8","R":"9","S":"1","T":"2","U":"3","V":"4","W":"5","X":"6","Y":"7","Z":"8"};
		let ltn;
		let ltnb = 0;
		for (ltn in text) {
			let ltnc = Number(a[text[ltn]]);
			ltnb += ltnc;
			}
			text = ltnb % 9;
			if (text == 0) {
				text = 9;
				}
		return text;
		}
	let nText = letterToNumber(checkText);
	let inputTN = document.getElementById("ntext").value = nText;
	let totalsum = nDate + nText;
	let tsum = totalsum % 9;
	if (tsum == 0) {
		tsum += 9;
		}
		let inputTotal = document.getElementById("total").value = tsum;
		let t1 = String(totalsum);
		let t2 = t1.split("");
		let t3 = t2[0];
		let t4 = t2[1];
		let dn = document.getElementById("dn").innerHTML = nDate;
		let tn = document.getElementById("tn").innerHTML = nText;
		let ts = document.getElementById("ts").innerHTML = totalsum;
		if (totalsum > 9) {
			let tt = document.getElementById("tt").innerHTML = t3 + " + " + t4 + " = " + tsum;
			}
		else {
			tt = document.getElementById("tt").innerHTML = "";
			}
	}

function today() {
	function now() {
		let dateNow = new Date();
		let dateYear = dateNow.getFullYear();
		let dateMonth = dateNow.getMonth() + 1;
		if (dateMonth < 10) {
			dateMonth = "0" + dateMonth;
			}
		let dateDay = dateNow.getDate();
		if (dateDay < 10) {
			dateDay = "0" + dateDay;
			}
		let fullDate = dateYear + "-" + dateMonth + "-" + dateDay;
	return fullDate;
	}
	let inputDate = String(now());
	let btnToday = document.getElementById("date").value = inputDate;
	}

function clearInput(){
	let getValue = document.getElementById("text");
	if (getValue.value != "") {
		getValue.value = "";
		}
	}

const buttons = document.querySelectorAll(".btn");
const textarea = document.querySelector(".tex");
buttons.forEach(function (btn) {
	btn.addEventListener("click", function () {
		textarea.value += btn.innerText;
		});
	});

function swap(sheet) {
	document.getElementById("pgs").setAttribute("href", sheet);
	}

function initate() {
	let ss1 = document.getElementById("ssheet1");
	let ss2 = document.getElementById("ssheet2");
	let ss3 = document.getElementById("ssheet3");
	let ss4 = document.getElementById("ssheet4");
	let ss5 = document.getElementById("ssheet5");
	ss1.onclick = function () {
		swap("style1.css");
		};
	ss2.onclick = function () {
		swap("style2.css");
		};
	ss3.onclick = function () {
		swap("style3.css");
		};
	ss4.onclick = function () {
		swap("style4.css");
		};
	ss5.onclick = function () {
		swap("style5.css");
		};
	}
	
	window.onload = initate;

let css	= "<button type=\"button\" id=\"ssheet1\"></button>" +
"\n" + "<button type=\"button\" id=\"ssheet2\"></button>" + 
"\n" + "<button type=\"button\" id=\"ssheet3\"></button>" + 
"\n" + "<button type=\"button\" id=\"ssheet4\"></button>" + 
"\n" + "<button type=\"button\" id=\"ssheet5\"></button>";
let chc1 = document.getElementById("chc").innerHTML = css;
