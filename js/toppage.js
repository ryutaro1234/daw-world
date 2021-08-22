window.addEventListener("load", () => {
  document.getElementById("type01").classList.add("active");
});

$(window).on('load',function (){
  $('.bg01').addClass('-visible');
});

window.addEventListener("load", () => {
  document.getElementById("bg02").classList.add("-visible");
});

window.addEventListener("load", () => {
  document.getElementById("title01").classList.add("-visible");
});

window.addEventListener("load", () => {
  document.getElementById("main-image").classList.add("active");
});

$(window).on('load',function (){
  $('.bg03').addClass('-visible');
});

window.addEventListener("load", () => {
  document.getElementById("bg04").classList.add("-visible");
});

$(function(){
  $(window).on('scroll',function (){
    $('.bg05').each(function(){
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height){
        $(this).addClass('-visible');
      }
    });
  });
});

var audio01 = document.getElementById("audio01");
audio01.onplay = function(){
  document.getElementById("basic-c01").classList.add("show01")
  document.getElementById("basic-d01").classList.add("show02")
  document.getElementById("basic-e01").classList.add("show03")
  document.getElementById("basic-f01").classList.add("show04")
  document.getElementById("basic-g01").classList.add("show05")
  document.getElementById("basic-a01").classList.add("show06")
  document.getElementById("basic-b01").classList.add("show07")
  document.getElementById("basic-c02").classList.add("show08")

  document.getElementById("table01-c01").classList.add("show01")
  document.getElementById("table01-d01").classList.add("show02")
  document.getElementById("table01-e01").classList.add("show03")
  document.getElementById("table01-f01").classList.add("show04")
  document.getElementById("table01-g01").classList.add("show05")
  document.getElementById("table01-a01").classList.add("show06")
  document.getElementById("table01-b01").classList.add("show07")
  document.getElementById("table01-c02").classList.add("show08")
};
audio01.onpause = function(){
  audio01.currentTime = 0;
  document.getElementById("basic-c01").classList.remove("show01")
  document.getElementById("basic-d01").classList.remove("show02")
  document.getElementById("basic-e01").classList.remove("show03")
  document.getElementById("basic-f01").classList.remove("show04")
  document.getElementById("basic-g01").classList.remove("show05")
  document.getElementById("basic-a01").classList.remove("show06")
  document.getElementById("basic-b01").classList.remove("show07")
  document.getElementById("basic-c02").classList.remove("show08")

  document.getElementById("table01-c01").classList.remove("show01")
  document.getElementById("table01-d01").classList.remove("show02")
  document.getElementById("table01-e01").classList.remove("show03")
  document.getElementById("table01-f01").classList.remove("show04")
  document.getElementById("table01-g01").classList.remove("show05")
  document.getElementById("table01-a01").classList.remove("show06")
  document.getElementById("table01-b01").classList.remove("show07")
  document.getElementById("table01-c02").classList.remove("show08")
};


$(function(){

  var bg01 = $('#bg01').offset(),
      bg02 = $('#bg02').offset(),
      bg03 = $('#bg03').offset(),
      bg04 = $('#bg04').offset();

  $(window).on('scroll',function(){
    var scrollY = $(this).scrollTop();

    $('#bg01').css({
      'top': + scrollY / 8,
      'left': bg01.left + scrollY / 10,
    });
    $('#bg02').css({
      'top': + scrollY / 2,
      'left': bg02.left + scrollY / 8,
    });
    $('#bg03').css({
      'bottom': scrollY / 8,
      'left': bg03.left + scrollY / 2,
    });
    $('#bg04').css({
      'left': bg04.left + scrollY / -5,
    });
  });
});
