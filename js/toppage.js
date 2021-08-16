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
    scrollY = $(this).scrollTop()

    $('#type02').each(function(){
      var target = $(this).offset().top,
      scroll = $(window).scrollTop(),
      height = $(window).height(),
      type02 = $(this).offset();

      if (scroll > target - height){
        $(this).addClass('active');
        $(this).css({
          'fontSize': + scrollY / 5,
        });
      }
    });
  });
});

$(function(){
  $(window).on('scroll',function (){
    scrollY = $(this).scrollTop()

    $('#type03').each(function(){
      var target = $(this).offset().top,
      scroll = $(window).scrollTop(),
      height = $(window).height(),
      type03 = $(this).offset();

      if (scroll > target - height){
        $(this).addClass('active');
        $(this).css({
          'fontSize': + scrollY / 10,
        });
      }
    });
  });
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
