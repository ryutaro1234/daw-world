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
