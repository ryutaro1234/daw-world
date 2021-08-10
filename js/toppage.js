window.addEventListener("load", () => {
  document.getElementById("type01").classList.add("active");
});

window.addEventListener("load", () => {
  document.getElementById("bg01").classList.add("-visible");
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

window.addEventListener("load", () => {
  document.getElementById("bg03").classList.add("-visible");
});

window.addEventListener("load", () => {
  document.getElementById("bg04").classList.add("-visible");
});

window.addEventListener("load", () => {
  document.getElementById("type02").classList.add("active");
});


$(function(){

  var bg01 = $('#bg01').offset(),
      bg02 = $('#bg02').offset(),
      bg03 = $('#bg03').offset(),
      bg04 = $('#bg04').offset();

  $(window).on('scroll',function(){
    var scrollY = $(this).scrollTop();
    console.log(scrollY);

    $('#bg01').css({
      'top': + scrollY / 8,
      'left': bg01.left + scrollY / 10
    });

    $('#bg02').css({
      'top': 50 + scrollY / 2,
      'left': bg02.left + scrollY / 8
    });

    $('#bg03').css({
      'top': bg03.bottom + scrollY / 5,
      'left': bg03.left + scrollY / 2
    });

    $('#bg04').css({
      'top': bg04.bottom + scrollY / 1,
      'left': bg04.left + scrollY / -5
    });
  });
});
