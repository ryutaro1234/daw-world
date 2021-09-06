function candgbuttom01(){
  document.querySelector("#candgbuttom01").classList.add("click");
  document.querySelector("#audio01").play();
}
function candgbuttom02(){
  document.querySelector("#audio01").pause();
}

var audio01 = document.querySelector("#audio01");
audio01.onplay = function(){
  document.querySelector("#candgbuttom02").classList.add("click");
  document.querySelector("#g").classList.add("play01");
  document.querySelector("#c").classList.add("play01");
}
audio01.onpause = function(){
  audio01.currentTime = 0;
  document.querySelector("#candgbuttom02").classList.remove("click");
  document.querySelector("#candgbuttom01").classList.remove("click");
  document.querySelector("#g").classList.remove("play01");
  document.querySelector("#c").classList.remove("play01");
}

function melody01buttom01(){
  document.querySelector("#melody01buttom01").classList.add("click");
  document.querySelector("#audio02").play();
}
function melody01buttom02(){
  document.querySelector("#audio02").pause();
}

var audio02 = document.querySelector("#audio02");
audio02.onplay = function(){
  document.querySelector("#melody01buttom02").classList.add("click");
}
audio02.onpause = function(){
  audio02.currentTime = 0;
  document.querySelector("#melody01buttom02").classList.remove("click");
  document.querySelector("#melody01buttom01").classList.remove("click");
}

function melody02buttom01(){
  document.querySelector("#melody02buttom01").classList.add("click");
  document.querySelector("#audio03").play();
}
function melody02buttom02(){
  document.querySelector("#audio03").pause();
}

var audio03 = document.querySelector("#audio03");
audio03.onplay = function(){
  document.querySelector("#melody02buttom02").classList.add("click");
}
audio03.onpause = function(){
  audio03.currentTime = 0;
  document.querySelector("#melody02buttom02").classList.remove("click");
  document.querySelector("#melody02buttom01").classList.remove("click");
}
