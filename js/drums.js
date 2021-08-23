function pop01(){
  document.getElementById("pop01").classList.add("click");
  document.getElementById("low02-shell").classList.add("pop01");
  document.getElementById("mid02-shell").classList.add("pop01");
  document.getElementById("hi02-shell").classList.add("pop01");
  document.getElementById("snare02-shell").classList.add("pop01");
  document.querySelector("#audio01").play();

  document.querySelector("#audio02").pause();
  document.querySelector("#audio03").pause();
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
  document.getElementById("jazz01").classList.add("click");
  document.getElementById("low02-shell").classList.add("jazz01");
  document.getElementById("mid02-shell").classList.add("jazz01");
  document.getElementById("hi02-shell").classList.add("jazz01");
  document.getElementById("snare02-shell").classList.add("jazz01");
  document.querySelector("#audio02").play();

  document.querySelector("#audio01").pause();
  document.querySelector("#audio03").pause();
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
  document.getElementById("metal01").classList.add("click");
  document.getElementById("low02-shell").classList.add("metal01");
  document.getElementById("mid02-shell").classList.add("metal01");
  document.getElementById("hi02-shell").classList.add("metal01");
  document.getElementById("snare02-shell").classList.add("metal01");
  document.querySelector("#audio03").play();

  document.querySelector("#audio01").pause();
  document.querySelector("#audio02").pause();
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
  document.getElementById("bass02-shell").classList.add("audio01");
  document.getElementById("bass02").classList.add("audio01");
  document.getElementById("clash02-l").classList.add("audio01");
  document.getElementById("hat02-top").classList.add("audio01");
};

audio01.onpause = function(){
  document.getElementById("pop01").classList.remove("click");
  document.getElementById("low02-shell").classList.remove("pop01");
  document.getElementById("mid02-shell").classList.remove("pop01");
  document.getElementById("hi02-shell").classList.remove("pop01");
  document.getElementById("snare02-shell").classList.remove("pop01");
  document.getElementById("snare02-shell").classList.remove("audio01");
  document.getElementById("snare02").classList.remove("audio01");
  document.getElementById("bass02-shell").classList.remove("audio01");
  document.getElementById("bass02").classList.remove("audio01");
  document.getElementById("clash02-l").classList.remove("audio01");
  document.getElementById("hat02-top").classList.remove("audio01");
  audio01.currentTime = 0;
};

var audio02 = document.querySelector("#audio02");
audio02.onplay = function(){
  document.querySelector("#bass02").classList.add("audio02");
  document.querySelector("#bass02-shell").classList.add("audio02");
  document.querySelector("#snare02").classList.add("audio02");
  document.querySelector("#snare02-shell").classList.add("audio02");
}
audio02.onpause = function(){
  document.getElementById("jazz01").classList.remove("click");
  document.getElementById("low02-shell").classList.remove("jazz01");
  document.getElementById("mid02-shell").classList.remove("jazz01");
  document.getElementById("hi02-shell").classList.remove("jazz01");
  document.getElementById("snare02-shell").classList.remove("jazz01");
  document.querySelector("#bass02").classList.remove("audio02");
  document.querySelector("#bass02-shell").classList.remove("audio02");
  document.querySelector("#snare02").classList.remove("audio02");
  document.querySelector("#snare02-shell").classList.remove("audio02");
  audio02.currentTime = 0;
};

var audio03 = document.querySelector("#audio03");
audio03.onpause = function(){
  document.querySelector("#metal01").classList.remove("click");
  document.getElementById("low02-shell").classList.remove("metal01");
  document.getElementById("mid02-shell").classList.remove("metal01");
  document.getElementById("hi02-shell").classList.remove("metal01");
  document.getElementById("snare02-shell").classList.remove("metal01");
  audio03.currentTime = 0;
};

function score01(){
  document.querySelector("#score01").classList.toggle("click");
  document.querySelector("#drums-notes").classList.toggle("click");
};
