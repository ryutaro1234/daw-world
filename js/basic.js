var audio01 = document.getElementById("audio01");
audio01.onplay=function(){
  document.getElementById("basic-c01").classList.add("show01")
  document.getElementById("basic-d01").classList.add("show02")
  document.getElementById("basic-e01").classList.add("show03")
  document.getElementById("basic-f01").classList.add("show04")
  document.getElementById("basic-g01").classList.add("show05")
  document.getElementById("basic-a01").classList.add("show06")
  document.getElementById("basic-b01").classList.add("show07")
};

audio01.onpause=function(){
  document.getElementById("basic-c01").classList.remove("show01")
  document.getElementById("basic-d01").classList.remove("show02")
  document.getElementById("basic-e01").classList.remove("show03")
  document.getElementById("basic-f01").classList.remove("show04")
  document.getElementById("basic-g01").classList.remove("show05")
  document.getElementById("basic-a01").classList.remove("show06")
  document.getElementById("basic-b01").classList.remove("show07")
  audio01.currentTime = 0;
};

var audio02 = document.getElementById("audio02");
audio02.onplay=function(){
  document.getElementById("basic-c02").classList.add("show01")
  document.getElementById("basic-d02").classList.add("show02")
  document.getElementById("basic-e02").classList.add("show03")
  document.getElementById("basic-f02").classList.add("show04")
  document.getElementById("basic-g02").classList.add("show05")
  document.getElementById("basic-a02").classList.add("show06")
  document.getElementById("basic-b02").classList.add("show07")
};

audio02.onpause=function(){
  document.getElementById("basic-c02").classList.remove("show01")
  document.getElementById("basic-d02").classList.remove("show02")
  document.getElementById("basic-e02").classList.remove("show03")
  document.getElementById("basic-f02").classList.remove("show04")
  document.getElementById("basic-g02").classList.remove("show05")
  document.getElementById("basic-a02").classList.remove("show06")
  document.getElementById("basic-b02").classList.remove("show07")
  audio02.currentTime = 0;
};
