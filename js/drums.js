function pop01(){
  document.getElementById("pop01").classList.toggle("click");
  document.getElementById("audio01").classList.toggle("click");
  document.getElementById("low02-shell").classList.toggle("pop01");
  document.getElementById("mid02-shell").classList.toggle("pop01");
  document.getElementById("hi02-shell").classList.toggle("pop01");
  document.getElementById("snare02-shell").classList.toggle("pop01");

  document.getElementById("jazz01").classList.remove("click");
  document.getElementById("audio02").classList.remove("click");
  document.getElementById("metal01").classList.remove("click");
  document.getElementById("audio03").classList.remove("click");
  document.getElementById("low02-shell").classList.remove("jazz01");
  document.getElementById("mid02-shell").classList.remove("jazz01");
  document.getElementById("hi02-shell").classList.remove("jazz01");
  document.getElementById("snare02-shell").classList.remove("jazz01");
  document.getElementById("low02-shell").classList.remove("metal01");
  document.getElementById("mid02-shell").classList.remove("metal01");
  document.getElementById("hi02-shell").classList.remove("metal01");
  document.getElementById("snare02-shell").classList.remove("metal01");

};

function jazz01(){
  document.getElementById("jazz01").classList.toggle("click");
  document.getElementById("audio02").classList.toggle("click");
  document.getElementById("low02-shell").classList.toggle("jazz01");
  document.getElementById("mid02-shell").classList.toggle("jazz01");
  document.getElementById("hi02-shell").classList.toggle("jazz01");
  document.getElementById("snare02-shell").classList.toggle("jazz01");

  document.getElementById("pop01").classList.remove("click");
  document.getElementById("audio01").classList.remove("click")
  document.getElementById("metal01").classList.remove("click");
  document.getElementById("audio03").classList.remove("click");
  document.getElementById("low02-shell").classList.remove("pop01");
  document.getElementById("mid02-shell").classList.remove("pop01");
  document.getElementById("hi02-shell").classList.remove("pop01");
  document.getElementById("snare02-shell").classList.remove("pop01");
  document.getElementById("low02-shell").classList.remove("metal01");
  document.getElementById("mid02-shell").classList.remove("metal01");
  document.getElementById("hi02-shell").classList.remove("metal01");
  document.getElementById("snare02-shell").classList.remove("metal01");
};

function metal01(){
  document.getElementById("metal01").classList.toggle("click");
  document.getElementById("audio03").classList.toggle("click");
  document.getElementById("low02-shell").classList.toggle("metal01");
  document.getElementById("mid02-shell").classList.toggle("metal01");
  document.getElementById("hi02-shell").classList.toggle("metal01");
  document.getElementById("snare02-shell").classList.toggle("metal01");

  document.getElementById("pop01").classList.remove("click");
  document.getElementById("audio01").classList.remove("click")
  document.getElementById("jazz01").classList.remove("click");
  document.getElementById("audio02").classList.remove("click");
  document.getElementById("low02-shell").classList.remove("pop01");
  document.getElementById("mid02-shell").classList.remove("pop01");
  document.getElementById("hi02-shell").classList.remove("pop01");
  document.getElementById("snare02-shell").classList.remove("pop01");
  document.getElementById("low02-shell").classList.remove("jazz01");
  document.getElementById("mid02-shell").classList.remove("jazz01");
  document.getElementById("hi02-shell").classList.remove("jazz01");
  document.getElementById("snare02-shell").classList.remove("jazz01");
};

var audio01 = document.getElementById("audio01");
audio01.onplay = function(){
  document.getElementById("snare02-shell").classList.add("audio01");
  document.getElementById("snare02").classList.add("audio01");
};

audio01.onpause = function(){
  document.getElementById("snare02-shell").classList.remove("audio01");
  document.getElementById("snare02").classList.remove("audio01");
  audio01.currentTime = 0;
};
