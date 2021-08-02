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

var whole = document.getElementById("whole");
function whole(){
	document.getElementById("whole").classList.toggle("whole-click");
	document.getElementById("basic-c01").classList.toggle("whole-fill");
	document.getElementById("basic-d01").classList.toggle("whole-fill");
	document.getElementById("basic-cb01").classList.toggle("whole-fill02");
	document.getElementById("basic-db01").classList.toggle("whole-fill02");
};
