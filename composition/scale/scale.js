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

function whole(){
  document.getElementById("whole").classList.toggle("whole-bottom");

  let whole01 = document.getElementsByClassName("whole01");
  Array.prototype.forEach.call(whole01, function (whole01click) {
    whole01click.classList.toggle("whole-fill");
  });
  document.getElementById("basic-db05").classList.toggle("whole-fill02");
};

function semi(){
  document.getElementById("semi").classList.toggle("semi-bottom");

  let semi01 = document.getElementsByClassName("semi01");
  Array.prototype.forEach.call(semi01, function (semi01click) {
    semi01click.classList.toggle("semi-fill");
  });
};

function whole02(){
  document.getElementById("whole02").classList.toggle("whole-bottom");

  let whole02 = document.getElementsByClassName("whole02");
  Array.prototype.forEach.call(whole02, function (whole02click) {
    whole02click.classList.toggle("whole-click");
  });

  let whole02fill = document.getElementsByClassName("whole02-fill");
  Array.prototype.forEach.call(whole02fill, function (whole02fillclick) {
    whole02fillclick.classList.toggle("whole-fill");
  });

  let whole02fill02 = document.getElementsByClassName("whole02-fill02");
  Array.prototype.forEach.call(whole02fill02, function (whole02fill02click) {
    whole02fill02click.classList.toggle("whole-fill02");
  });

  document.getElementById("semi02").classList.remove("semi-bottom");

  let semi02 = document.getElementsByClassName("semi02");
  Array.prototype.forEach.call(semi02, function (semi02click) {
    semi02click.classList.remove("semi-click");
  });

  let semi02fill = document.getElementsByClassName("semi02-fill");
  Array.prototype.forEach.call(semi02fill, function (semi02fillclick) {
    semi02fillclick.classList.remove("semi-fill");
  });
};

function semi02(){
  document.getElementById("semi02").classList.toggle("semi-bottom");

  let semi02 = document.getElementsByClassName("semi02");
  Array.prototype.forEach.call(semi02, function (semi02click) {
    semi02click.classList.toggle("semi-click");
  });

  let semi02fill = document.getElementsByClassName("semi02-fill");
  Array.prototype.forEach.call(semi02fill, function (semi02fillclick) {
    semi02fillclick.classList.toggle("semi-fill");
  });

  document.getElementById("whole02").classList.remove("whole-bottom");

  let whole02 = document.getElementsByClassName("whole02");
  Array.prototype.forEach.call(whole02, function (whole02click) {
    whole02click.classList.remove("whole-click");
  });

  let whole02fill = document.getElementsByClassName("whole02-fill");
  Array.prototype.forEach.call(whole02fill, function (whole02fillclick) {
    whole02fillclick.classList.remove("whole-fill");
  });

  let whole02fill02 = document.getElementsByClassName("whole02-fill02");
  Array.prototype.forEach.call(whole02fill02, function (whole02fill02click) {
    whole02fill02click.classList.remove("whole-fill02");
  });
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

function maj01(){
  document.getElementById("maj01").classList.toggle("active");

  let maj = document.getElementsByClassName("maj");
  Array.prototype.forEach.call(maj, function (majclick) {
    majclick.classList.toggle("active");
  });

  document.getElementById("min01").classList.remove("active");
  let min = document.getElementsByClassName("min");
  Array.prototype.forEach.call(min, function (minclick) {
    minclick.classList.remove("active02");
  });
};

function min01(){
  document.getElementById("min01").classList.toggle("active");

  let min = document.getElementsByClassName("min");
  Array.prototype.forEach.call(min, function (minclick) {
    minclick.classList.toggle("active02");
  });

  document.getElementById("maj01").classList.remove("active");
  let maj = document.getElementsByClassName("maj");
  Array.prototype.forEach.call(maj, function (majclick) {
    majclick.classList.remove("active");
  });
};

$(function(){

  var bg01 = $('#position01').offset();
  var bg02 = $('#position02').offset();
  var bg03 = $('#position03').offset();
  var bg04 = $('#position04').offset();
  var bg05 = $('#position05').offset();

  $(window).on('scroll',function(){
    var scrollY = $(this).scrollTop();

    $('#position01').css({
      'top': bg01.top + scrollY / -8,
      'left': bg01.left + scrollY / -10,
    });

    $('#position02').css({
      'top': bg02.top + scrollY / 8,
      'left': bg02.left + scrollY / -10,
    });

    $('#position03').css({
      'top': bg03.top + scrollY / -15,
    });

    $('#position04').css({
      'top': bg04.top + scrollY / 10,
    });

    $('#position05').css({
      'top': bg05.top + scrollY / -10,
    });
  });
});