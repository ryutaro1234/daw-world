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
  document.querySelector("#ride02").classList.add("audio02");
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
  document.querySelector("#ride02").classList.remove("audio02");
  audio02.currentTime = 0;
};

function score01(){
  document.querySelector("#score01").classList.toggle("click");
  document.querySelector("#drums-notes").classList.toggle("click");
};

function doublestroke01(){
  document.querySelector("#doublestroke01").classList.add("click");
  document.querySelector("#stick01").classList.add("double");
  document.querySelector("#audio04").play();
}

var audio04 = document.querySelector("#audio04");
audio04.onpause = function(){
  document.querySelector("#doublestroke01").classList.remove("click");
  document.querySelector("#stick01").classList.remove("double");
  audio04.currentTime = 0;
};

var audio05 = document.querySelector("#audio05");
audio05.onplay = function(){
    document.querySelector("#do01").classList.add("play01");
    document.querySelector("#do02").classList.add("play01");
    document.querySelector("#do03").classList.add("play01");
    document.querySelector("#ta01").classList.add("play01");
    document.querySelector("#ta02").classList.add("play01");
    document.querySelector("#chi01").classList.add("play01");
    document.querySelector("#chi02").classList.add("play01");
    document.querySelector("#chi03").classList.add("play01");
    document.querySelector("#chi04").classList.add("play01");
    document.querySelector("#bass04").classList.add("play");
}
audio05.onpause = function(){
    audio05.currentTime = 0;
    document.querySelector("#do01").classList.remove("play01");
    document.querySelector("#do02").classList.remove("play01");
    document.querySelector("#do03").classList.remove("play01");
    document.querySelector("#ta01").classList.remove("play01");
    document.querySelector("#ta02").classList.remove("play01");
    document.querySelector("#chi01").classList.remove("play01");
    document.querySelector("#chi02").classList.remove("play01");
    document.querySelector("#chi03").classList.remove("play01");
    document.querySelector("#chi04").classList.remove("play01");
    document.querySelector("#bass04").classList.remove("play");
}
