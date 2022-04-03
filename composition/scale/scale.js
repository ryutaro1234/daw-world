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

audio01.onpause = function(){
  document.querySelector("#audio01buttom").classList.remove("active");
  document.querySelector("#audio01buttom").innerHTML = "▶︎再生";

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


document.querySelector("#audio01buttom").onclick = function () {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    this.textContent="▶︎再生";
    document.querySelector('#audio01').pause();
  }
  else {
    this.classList.add('active');
    this.textContent="■停止";
    document.querySelector('#audio01').play();
  }
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
  document.querySelector("#audio02buttom").classList.remove("active");
  document.querySelector("#audio02buttom").innerHTML = "▶︎再生";

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

document.querySelector("#audio02buttom").onclick = function () {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    this.textContent="▶︎再生";
    document.querySelector('#audio02').pause();
  }
  else {
    this.classList.add('active');
    this.textContent="■停止";
    document.querySelector('#audio02').play();
  }
};

function whole(){
  document.getElementById("whole").classList.toggle("whole-bottom");
  const whole01 = document.getElementsByClassName("whole01");
  for(var i = 0; i < whole01.length; i++){
      whole01[i].classList.toggle("whole-fill");
  };
  document.getElementById("basic-db05").classList.toggle("whole-fill02");
};

function semi(){
  document.getElementById("semi").classList.toggle("semi-bottom");
  const semi01 = document.getElementsByClassName("semi01");
  for(var i = 0; i < semi01.length; i++){
      semi01[i].classList.toggle("semi-fill");
  };
};

function whole02(){
  document.getElementById("whole02").classList.toggle("whole-bottom");

  const whole02 = document.getElementsByClassName("whole02");
  for(var i = 0; i < whole02.length; i++){
      whole02[i].classList.toggle("whole-click");
  };

  const whole02fill = document.getElementsByClassName("whole02-fill");
  for(var i = 0; i < whole02fill.length; i++){
      whole02fill[i].classList.toggle("whole-fill");
  };

  const whole02fill02 = document.getElementsByClassName("whole02-fill02");
  for(var i = 0; i < whole02fill02.length; i++){
      whole02fill02[i].classList.toggle("whole-fill02");
  };

  document.getElementById("semi02").classList.remove("semi-bottom");

  const semi02 = document.getElementsByClassName("semi02");
  for(var i = 0; i < semi02.length; i++){
    semi02[i].classList.remove("semi-click");
  };

  const semi02fill = document.getElementsByClassName("semi02-fill");
  for(var i = 0; i < semi02fill.length; i++){
    semi02fill[i].classList.remove("semi-fill");
  };
};

function semi02(){
  document.getElementById("semi02").classList.toggle("semi-bottom");

  const semi02 = document.getElementsByClassName("semi-buttom");
  for(var i = 0; i < semi02.length; i++){
    semi02[i].classList.toggle("semi-click");
  };

  const semi02fill = document.getElementsByClassName("semi02-fill");
  for(var i = 0; i < semi02fill.length; i++){
    semi02fill[i].classList.toggle("semi-fill");
  };

  document.getElementById("whole02").classList.remove("whole-bottom");

  const whole02 = document.getElementsByClassName("whole02");
  for(var i = 0; i < whole02.length; i++){
      whole02[i].classList.remove("whole-click");
  };

  const whole02fill = document.getElementsByClassName("whole02-fill");
  for(var i = 0; i < whole02fill.length; i++){
      whole02fill[i].classList.remove("whole-fill");
  };

  const whole02fill02 = document.getElementsByClassName("whole02-fill02");
  for(var i = 0; i < whole02fill02.length; i++){
      whole02fill02[i].classList.remove("whole-fill02");
  };
};

var audio03 = document.getElementById("audio03");
audio03.onplay = function(){
  document.getElementById("f-01").classList.add("show02-01");
  document.getElementById("gb-01").classList.add("show05-02");
  document.getElementById("g-01").classList.add("show03-01");
  document.getElementById("ab-01").classList.add("show05-02");
  document.getElementById("a-01").classList.add("show03-01");
  document.getElementById("bb-01").classList.add("show04-02");
  document.getElementById("b-01").classList.add("show05-01");
  document.getElementById("c-02").classList.add("show03-01");
  document.getElementById("db-02").classList.add("show05-02");
  document.getElementById("d-02").classList.add("show03-01");
  document.getElementById("eb-02").classList.add("show05-02");
  document.getElementById("e-02").classList.add("show03-01");
  document.getElementById("f-02").classList.add("show04-01");
};

audio03.onpause = function(){
  document.querySelector("#audio03buttom").classList.remove("active");
  document.querySelector("#audio03buttom").innerHTML = "▶︎再生";

  document.getElementById("f-01").classList.remove("show02-01");
  document.getElementById("gb-01").classList.remove("show05-02");
  document.getElementById("g-01").classList.remove("show03-01");
  document.getElementById("ab-01").classList.remove("show05-02");
  document.getElementById("a-01").classList.remove("show03-01");
  document.getElementById("bb-01").classList.remove("show04-02");
  document.getElementById("b-01").classList.remove("show05-01");
  document.getElementById("c-02").classList.remove("show03-01");
  document.getElementById("db-02").classList.remove("show05-02");
  document.getElementById("d-02").classList.remove("show03-01");
  document.getElementById("eb-02").classList.remove("show05-02");
  document.getElementById("e-02").classList.remove("show03-01");
  document.getElementById("f-02").classList.remove("show04-01");
  audio03.currentTime = 0;
};

document.querySelector("#audio03buttom").onclick = function () {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    this.textContent="▶︎再生";
    document.querySelector('#audio03').pause();
  }
  else {
    this.classList.add('active');
    this.textContent="■停止";
    document.querySelector('#audio03').play();
  }
};

var audio04 = document.getElementById("audio04");
audio04.onplay = function(){
  document.getElementById("db-03").classList.add("show02-02");
  document.getElementById("d-03").classList.add("show05-01");
  document.getElementById("eb-03").classList.add("show03-02");
  document.getElementById("e-03").classList.add("show05-01");
  document.getElementById("f-03").classList.add("show03-01");
  document.getElementById("gb-03").classList.add("show04-02");
  document.getElementById("g-03").classList.add("show05-01");
  document.getElementById("ab-03").classList.add("show03-02");
  document.getElementById("a-03").classList.add("show05-01");
  document.getElementById("bb-03").classList.add("show03-02");
  document.getElementById("b-03").classList.add("show05-01");
  document.getElementById("c-04").classList.add("show03-01");
  document.getElementById("db-04").classList.add("show04-02");
};

audio04.onpause = function(){
  document.querySelector("#audio04buttom").classList.remove("active");
  document.querySelector("#audio04buttom").innerHTML = "▶︎再生";

  document.getElementById("db-03").classList.remove("show02-02");
  document.getElementById("d-03").classList.remove("show05-01");
  document.getElementById("eb-03").classList.remove("show03-02");
  document.getElementById("e-03").classList.remove("show05-01");
  document.getElementById("f-03").classList.remove("show03-01");
  document.getElementById("gb-03").classList.remove("show04-02");
  document.getElementById("g-03").classList.remove("show05-01");
  document.getElementById("ab-03").classList.remove("show03-02");
  document.getElementById("a-03").classList.remove("show05-01");
  document.getElementById("bb-03").classList.remove("show03-02");
  document.getElementById("b-03").classList.remove("show05-01");
  document.getElementById("c-04").classList.remove("show03-01");
  document.getElementById("db-04").classList.remove("show04-02");
  audio04.currentTime = 0;
};

document.querySelector("#audio04buttom").onclick = function () {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    this.textContent="▶︎再生";
    document.querySelector('#audio04').pause();
  }
  else {
    this.classList.add('active');
    this.textContent="■停止";
    document.querySelector('#audio04').play();
  }
};

var audio05 = document.getElementById("audio05");
audio05.onplay = function(){
  document.getElementById("a-05").classList.add("show02-01");
  document.getElementById("b-05").classList.add("show03-01");
  document.getElementById("c-06").classList.add("show04-01");
  document.getElementById("d-06").classList.add("show03-01");
  document.getElementById("e-06").classList.add("show03-01");
  document.getElementById("f-06").classList.add("show04-01");
  document.getElementById("g-06").classList.add("show03-01");
  document.getElementById("a-06").classList.add("show03-01");
};

audio05.onpause = function(){
  document.querySelector("#audio05buttom").classList.remove("active");
  document.querySelector("#audio05buttom").innerHTML = "▶︎再生";

  document.getElementById("a-05").classList.remove("show02-01");
  document.getElementById("b-05").classList.remove("show03-01");
  document.getElementById("c-06").classList.remove("show04-01");
  document.getElementById("d-06").classList.remove("show03-01");
  document.getElementById("e-06").classList.remove("show03-01");
  document.getElementById("f-06").classList.remove("show04-01");
  document.getElementById("g-06").classList.remove("show03-01");
  document.getElementById("a-06").classList.remove("show03-01");
  audio05.currentTime = 0;
};

document.querySelector("#audio05buttom").onclick = function () {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    this.textContent="▶︎再生";
    document.querySelector('#audio05').pause();
  }
  else {
    this.classList.add('active');
    this.textContent="■停止";
    document.querySelector('#audio05').play();
  }
};

function maj01(){
  document.getElementById("maj01").classList.toggle("active");
  const maj = document.getElementsByClassName("maj");
  for(var i = 0; i < maj.length; i++){
      maj[i].classList.toggle("active");
  };

  document.getElementById("min01").classList.remove("active");
  const min = document.getElementsByClassName("min");
  for(var i = 0; i < min.length; i++){
      min[i].classList.remove("active02");
  };

};

function min01(){
  document.getElementById("min01").classList.toggle("active");
  const min = document.getElementsByClassName("min");
  for(var i = 0; i < min.length; i++){
      min[i].classList.toggle("active02");
  };

  document.getElementById("maj01").classList.remove("active");
  const maj = document.getElementsByClassName("maj");
  for(var i = 0; i < maj.length; i++){
      maj[i].classList.remove("active");
  };
};
