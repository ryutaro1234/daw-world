var rellax = new Rellax('#basic001', {speed: 1,});
var rellax = new Rellax('#basic002', {speed: 2,});
var rellax = new Rellax('#shape01', {speed: -2,});
var rellax = new Rellax('#shape02', {speed: -3,});
var rellax = new Rellax('#shape03', {speed: 3,});
var rellax = new Rellax('#shape04', {speed: 8,});
var rellax = new Rellax('#shape05', {speed: -2,});
var rellax = new Rellax('#shape06', {speed: -4,});
var rellax = new Rellax('#shape07', {speed: 2,});
var rellax = new Rellax('#shape08', {speed: 4,});
var rellax = new Rellax('#shape09', {speed: -3,});
var rellax = new Rellax('#shape10', {speed: 6,});
var rellax = new Rellax('#shape11', {speed: -3,});
var rellax = new Rellax('#shape12', {speed: 4,});
var rellax = new Rellax('#shape13', {speed: 3,});
var rellax = new Rellax('#shape14', {speed: 4,});

var audio01 = document.getElementById("audio01");
audio01.onplay = function(){
	document.getElementById("basic-c01").classList.add("show01");
	document.getElementById("basic-d01").classList.add("show02");
	document.getElementById("basic-e01").classList.add("show03");
	document.getElementById("basic-f01").classList.add("show04");
	document.getElementById("basic-g01").classList.add("show05");
	document.getElementById("basic-a01").classList.add("show06");
	document.getElementById("basic-b01").classList.add("show07");
	document.getElementById("basic-c02").classList.add("show08");

	document.getElementById("table01-c01").classList.add("show01");
	document.getElementById("table01-d01").classList.add("show02");
	document.getElementById("table01-e01").classList.add("show03");
	document.getElementById("table01-f01").classList.add("show04");
	document.getElementById("table01-g01").classList.add("show05");
	document.getElementById("table01-a01").classList.add("show06");
	document.getElementById("table01-b01").classList.add("show07");
	document.getElementById("table01-c02").classList.add("show08");
};

audio01.onpause=function(){
	document.getElementById("basic-c01").classList.remove("show01");
	document.getElementById("basic-d01").classList.remove("show02");
	document.getElementById("basic-e01").classList.remove("show03");
	document.getElementById("basic-f01").classList.remove("show04");
	document.getElementById("basic-g01").classList.remove("show05");
	document.getElementById("basic-a01").classList.remove("show06");
	document.getElementById("basic-b01").classList.remove("show07");
	document.getElementById("basic-c02").classList.remove("show08");

	document.getElementById("table01-c01").classList.remove("show01");
	document.getElementById("table01-d01").classList.remove("show02");
	document.getElementById("table01-e01").classList.remove("show03");
	document.getElementById("table01-f01").classList.remove("show04");
	document.getElementById("table01-g01").classList.remove("show05");
	document.getElementById("table01-a01").classList.remove("show06");
	document.getElementById("table01-b01").classList.remove("show07");
	document.getElementById("table01-c02").classList.remove("show08");
	audio01.currentTime = 0;
};

var audio02 = document.getElementById("audio02");
audio02.onplay = function(){
	document.getElementById("basic-c03").classList.add("show01");
	document.getElementById("basic-d03").classList.add("show02");
	document.getElementById("basic-e03").classList.add("show03");
	document.getElementById("basic-f03").classList.add("show04");
	document.getElementById("basic-g03").classList.add("show05");
	document.getElementById("basic-a03").classList.add("show06");
	document.getElementById("basic-b03").classList.add("show07");
	document.getElementById("basic-c04").classList.add("show08");

	document.getElementById("table02-c03").classList.add("show01");
	document.getElementById("table02-d03").classList.add("show02");
	document.getElementById("table02-e03").classList.add("show03");
	document.getElementById("table02-f03").classList.add("show04");
	document.getElementById("table02-g03").classList.add("show05");
	document.getElementById("table02-a03").classList.add("show06");
	document.getElementById("table02-b03").classList.add("show07");
	document.getElementById("table02-c04").classList.add("show08");

	document.getElementById("table03-c03").classList.add("show01");
	document.getElementById("table03-d03").classList.add("show02");
	document.getElementById("table03-e03").classList.add("show03");
	document.getElementById("table03-f03").classList.add("show04");
	document.getElementById("table03-g03").classList.add("show05");
	document.getElementById("table03-a03").classList.add("show06");
	document.getElementById("table03-b03").classList.add("show07");
	document.getElementById("table03-c04").classList.add("show08");
};

audio02.onpause = function(){
	document.getElementById("basic-c03").classList.remove("show01");
	document.getElementById("basic-d03").classList.remove("show02");
	document.getElementById("basic-e03").classList.remove("show03");
	document.getElementById("basic-f03").classList.remove("show04");
	document.getElementById("basic-g03").classList.remove("show05");
	document.getElementById("basic-a03").classList.remove("show06");
	document.getElementById("basic-b03").classList.remove("show07");
	document.getElementById("basic-c04").classList.remove("show08");

	document.getElementById("table02-c03").classList.remove("show01");
	document.getElementById("table02-d03").classList.remove("show02");
	document.getElementById("table02-e03").classList.remove("show03");
	document.getElementById("table02-f03").classList.remove("show04");
	document.getElementById("table02-g03").classList.remove("show05");
	document.getElementById("table02-a03").classList.remove("show06");
	document.getElementById("table02-b03").classList.remove("show07");
	document.getElementById("table02-c04").classList.remove("show08");

	document.getElementById("table03-c03").classList.remove("show01");
	document.getElementById("table03-d03").classList.remove("show02");
	document.getElementById("table03-e03").classList.remove("show03");
	document.getElementById("table03-f03").classList.remove("show04");
	document.getElementById("table03-g03").classList.remove("show05");
	document.getElementById("table03-a03").classList.remove("show06");
	document.getElementById("table03-b03").classList.remove("show07");
	document.getElementById("table03-c04").classList.remove("show08");
	audio02.currentTime = 0;
};

function whole(){
	document.getElementById("whole").classList.toggle("whole-bottom");

	let whole01 = document.getElementsByClassName("whole01");
	Array.prototype.forEach.call(whole01, function (whole01click) {
		whole01click.classList.toggle("whole-fill");
	});
	document.getElementById("basic-db05").classList.toggle("whole-fill02");
};

function semi(){
	document.getElementById("semi").classList.toggle("semi-bottom");

	let semi01 = document.getElementsByClassName("semi01");
	Array.prototype.forEach.call(semi01, function (semi01click) {
		semi01click.classList.toggle("semi-fill");
	});
};

function whole02(){
	document.getElementById("whole02").classList.toggle("whole-bottom");

	let whole02 = document.getElementsByClassName("whole02");
	Array.prototype.forEach.call(whole02, function (whole02click) {
		whole02click.classList.toggle("whole-click");
	});

	let whole02fill = document.getElementsByClassName("whole02-fill");
	Array.prototype.forEach.call(whole02fill, function (whole02fillclick) {
		whole02fillclick.classList.toggle("whole-fill");
	});

	let whole02fill02 = document.getElementsByClassName("whole02-fill02");
	Array.prototype.forEach.call(whole02fill02, function (whole02fill02click) {
		whole02fill02click.classList.toggle("whole-fill02");
	});

	document.getElementById("semi02").classList.remove("semi-bottom");

	let semi02 = document.getElementsByClassName("semi02");
	Array.prototype.forEach.call(semi02, function (semi02click) {
		semi02click.classList.remove("semi-click");
	});

	let semi02fill = document.getElementsByClassName("semi02-fill");
	Array.prototype.forEach.call(semi02fill, function (semi02fillclick) {
		semi02fillclick.classList.remove("semi-fill");
	});
};

function semi02(){
	document.getElementById("semi02").classList.toggle("semi-bottom");

	let semi02 = document.getElementsByClassName("semi02");
	Array.prototype.forEach.call(semi02, function (semi02click) {
		semi02click.classList.toggle("semi-click");
	});

	let semi02fill = document.getElementsByClassName("semi02-fill");
	Array.prototype.forEach.call(semi02fill, function (semi02fillclick) {
		semi02fillclick.classList.toggle("semi-fill");
	});

	document.getElementById("whole02").classList.remove("whole-bottom");

	let whole02 = document.getElementsByClassName("whole02");
	Array.prototype.forEach.call(whole02, function (whole02click) {
		whole02click.classList.remove("whole-click");
	});

	let whole02fill = document.getElementsByClassName("whole02-fill");
	Array.prototype.forEach.call(whole02fill, function (whole02fillclick) {
		whole02fillclick.classList.remove("whole-fill");
	});

	let whole02fill02 = document.getElementsByClassName("whole02-fill02");
	Array.prototype.forEach.call(whole02fill02, function (whole02fill02click) {
		whole02fill02click.classList.remove("whole-fill02");
	});
};
