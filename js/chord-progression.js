function c01btn01(){
  document.querySelector("#c01btn01").classList.add("click");
  document.querySelector("#audio01").play();
}
function c01btn02(){
  document.querySelector("#audio01").pause();
}

var audio01 = document.querySelector("#audio01");
audio01.onplay = function(){
  document.querySelector("#c01btn02").classList.add("click");
  document.querySelector("#c-01").classList.add("play01");
  document.querySelector("#e-01").classList.add("play01");
  document.querySelector("#g-01").classList.add("play01");
  document.querySelector("#cchord").classList.add("play01");
}
audio01.onpause = function(){
  audio01.currentTime = 0;
  document.querySelector("#c01btn02").classList.remove("click");
  document.querySelector("#c01btn01").classList.remove("click");
  document.querySelector("#c-01").classList.remove("play01");
  document.querySelector("#e-01").classList.remove("play01");
  document.querySelector("#g-01").classList.remove("play01");
  document.querySelector("#cchord").classList.remove("play01");
}

function chord01btn01(){
  document.querySelector("#chord01btn01").classList.add("click");
  document.querySelector("#audio02").play();
}
function chord01btn02(){
  document.querySelector("#audio02").pause();
}

var audio02 = document.querySelector("#audio02");
audio02.onplay = function(){
  document.querySelector("#chord01btn02").classList.add("click");
  document.querySelector("#chord01").classList.add("play01");
  document.querySelector("#chord02").classList.add("play01");
  document.querySelector("#chord03").classList.add("play01");
}

audio02.onpause = function(){
  audio02.currentTime = 0;
  document.querySelector("#chord01btn02").classList.remove("click");
  document.querySelector("#chord01btn01").classList.remove("click");
  document.querySelector("#chord01").classList.remove("play01");
  document.querySelector("#chord02").classList.remove("play01");
  document.querySelector("#chord03").classList.remove("play01");
}
