function pop01(){
  document.getElementById("pop01").classList.add("click");
  document.querySelector("#pop02").classList.add("click");
  document.getElementById("low02-shell").classList.add("pop01");
  document.getElementById("mid02-shell").classList.add("pop01");
  document.getElementById("hi02-shell").classList.add("pop01");
  document.getElementById("snare02-shell").classList.add("pop01");
  document.querySelector("#audio01").play();

  document.querySelector("#audio02").pause();
  document.getElementById("jazz01").classList.remove("click");
  document.getElementById("audio02").classList.remove("click");
  document.getElementById("low02-shell").classList.remove("jazz01");
  document.getElementById("mid02-shell").classList.remove("jazz01");
  document.getElementById("hi02-shell").classList.remove("jazz01");
  document.getElementById("snare02-shell").classList.remove("jazz01");
};
function pop02(){
  document.querySelector("#pop02").classList.remove("click");
  document.querySelector("#audio01").pause();
}

function jazz01(){
  document.getElementById("jazz01").classList.add("click");
  document.querySelector("#jazz02").classList.add("click");
  document.getElementById("low02-shell").classList.add("jazz01");
  document.getElementById("mid02-shell").classList.add("jazz01");
  document.getElementById("hi02-shell").classList.add("jazz01");
  document.getElementById("snare02-shell").classList.add("jazz01");
  document.querySelector("#audio02").play();

  document.querySelector("#audio01").pause();
  document.getElementById("pop01").classList.remove("click");
  document.getElementById("audio01").classList.remove("click")
  document.getElementById("low02-shell").classList.remove("pop01");
  document.getElementById("mid02-shell").classList.remove("pop01");
  document.getElementById("hi02-shell").classList.remove("pop01");
  document.getElementById("snare02-shell").classList.remove("pop01");
};
function jazz02(){
  document.querySelector("#jazz02").classList.remove("click");
  document.querySelector("#audio02").pause();
}

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
  document.querySelector("#pop02").classList.remove("click");
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
  document.querySelector("#jazz01").innerHTML = '■ Jazz';
  document.querySelector("#bass02").classList.add("audio02");
  document.querySelector("#bass02-shell").classList.add("audio02");
  document.querySelector("#snare02").classList.add("audio02");
  document.querySelector("#snare02-shell").classList.add("audio02");
  document.querySelector("#ride02").classList.add("audio02");
}
audio02.onpause = function(){
  document.querySelector("#jazz02").classList.remove("click");
  document.querySelector("#jazz01").innerHTML = '▶︎ Jazz';
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
  document.querySelector("#score02").classList.toggle("click");
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

function beat801buttom(){
  document.querySelector("#beat802buttom").classList.add("click");
  document.querySelector("#audio05").play();
}
function beat802buttom(){
  document.querySelector("#audio05").pause();
}

var audio05 = document.querySelector("#audio05");
audio05.onplay = function(){
  document.querySelector("#beat801buttom").classList.add("click");
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
  document.querySelector("#bass04-shell").classList.add("play");
  document.querySelector("#snare04").classList.add("play");
  document.querySelector("#snare04-shell").classList.add("play");
  document.querySelector("#hat04-top").classList.add("play");
}
audio05.onpause = function(){
  audio05.currentTime = 0;
  document.querySelector("#beat802buttom").classList.remove("click");
  document.querySelector("#beat801buttom").classList.remove("click");
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
  document.querySelector("#bass04-shell").classList.remove("play");
  document.querySelector("#snare04").classList.remove("play");
  document.querySelector("#snare04-shell").classList.remove("play");
  document.querySelector("#hat04-top").classList.remove("play");
}

function beat1601buttom(){
  document.querySelector("#beat1602buttom").classList.add("click");
  document.querySelector("#audio06").play();
}
function beat1602buttom(){
  document.querySelector("#audio06").pause();
}

var audio06 = document.querySelector("#audio06");
audio06.onplay = function(){
  document.querySelector("#beat1601buttom").classList.add("click");
  document.querySelector("#bass05").classList.add("play");
  document.querySelector("#bass05-shell").classList.add("play");
  document.querySelector("#snare05").classList.add("play");
  document.querySelector("#snare05-shell").classList.add("play");
  document.querySelector("#hat05-top").classList.add("play");
  document.querySelector("#do11").classList.add("flash01");
  document.querySelector("#do12").classList.add("flash01");
  document.querySelector("#do13").classList.add("flash01");
  document.querySelector("#do14").classList.add("flash01");
}

audio06.onpause = function(){
  audio06.currentTime = 0;
  document.querySelector("#beat1602buttom").classList.remove("click");
  document.querySelector("#beat1601buttom").classList.remove("click");
  document.querySelector("#bass05").classList.remove("play");
  document.querySelector("#bass05-shell").classList.remove("play");
  document.querySelector("#snare05").classList.remove("play");
  document.querySelector("#snare05-shell").classList.remove("play");
  document.querySelector("#hat05-top").classList.remove("play");
  document.querySelector("#do11").classList.remove("flash01");
  document.querySelector("#do12").classList.remove("flash01");
  document.querySelector("#do13").classList.remove("flash01");
  document.querySelector("#do14").classList.remove("flash01");
}
