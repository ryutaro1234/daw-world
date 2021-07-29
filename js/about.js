var audio01 = document.getElementById("audio01");
audio01.onplay=function(){
	document.getElementById("basic-c01").classList.add("show01")
	document.getElementById("basic-d01").classList.add("show02")
	document.getElementById("basic-e01").classList.add("show03")
	document.getElementById("basic-f01").classList.add("show04")
	document.getElementById("basic-g01").classList.add("show05")
	document.getElementById("basic-a01").classList.add("show06")
	document.getElementById("basic-b01").classList.add("show07")
	document.getElementById("basic-c02").classList.add("show08")

	document.getElementById("table01-c01").classList.add("show01")
	document.getElementById("table01-d01").classList.add("show02")
	document.getElementById("table01-e01").classList.add("show03")
	document.getElementById("table01-f01").classList.add("show04")
	document.getElementById("table01-g01").classList.add("show05")
	document.getElementById("table01-a01").classList.add("show06")
	document.getElementById("table01-b01").classList.add("show07")
	document.getElementById("table01-c02").classList.add("show08")
};

audio01.onpause=function(){
	audio01.currentTime = 0;
	document.getElementById("basic-c01").classList.remove("show01")
	document.getElementById("basic-d01").classList.remove("show02")
	document.getElementById("basic-e01").classList.remove("show03")
	document.getElementById("basic-f01").classList.remove("show04")
	document.getElementById("basic-g01").classList.remove("show05")
	document.getElementById("basic-a01").classList.remove("show06")
	document.getElementById("basic-b01").classList.remove("show07")
	document.getElementById("basic-c02").classList.remove("show08")

	document.getElementById("table01-c01").classList.remove("show01")
	document.getElementById("table01-d01").classList.remove("show02")
	document.getElementById("table01-e01").classList.remove("show03")
	document.getElementById("table01-f01").classList.remove("show04")
	document.getElementById("table01-g01").classList.remove("show05")
	document.getElementById("table01-a01").classList.remove("show06")
	document.getElementById("table01-b01").classList.remove("show07")
	document.getElementById("table01-c02").classList.remove("show08")
};
