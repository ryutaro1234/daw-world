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

function melody01buttom01(){
  document.querySelector("#melody01buttom01").classList.add("click");
  document.querySelector("#audio02").play();
}
function melody01buttom02(){
  document.querySelector("#audio02").pause();
}

var audio02 = document.querySelector("#audio02");
audio02.onplay = function(){
  document.querySelector("#melody01buttom02").classList.add("click");
  document.querySelector("#do01").classList.add("play02");
  document.querySelector("#do02").classList.add("play02");
  document.querySelector("#do03").classList.add("play02");
  document.querySelector("#so01").classList.add("play02");
  document.querySelector("#so02").classList.add("play02");
  document.querySelector("#so03").classList.add("play02");
  document.querySelector("#so04").classList.add("play02");
}
audio02.onpause = function(){
  audio02.currentTime = 0;
  document.querySelector("#melody01buttom02").classList.remove("click");
  document.querySelector("#melody01buttom01").classList.remove("click");
  document.querySelector("#do01").classList.remove("play02");
  document.querySelector("#do02").classList.remove("play02");
  document.querySelector("#do03").classList.remove("play02");
  document.querySelector("#so01").classList.remove("play02");
  document.querySelector("#so02").classList.remove("play02");
  document.querySelector("#so03").classList.remove("play02");
  document.querySelector("#so04").classList.remove("play02");
}

function melody02buttom01(){
  document.querySelector("#melody02buttom01").classList.add("click");
  document.querySelector("#audio03").play();
}
function melody02buttom02(){
  document.querySelector("#audio03").pause();
}

var audio03 = document.querySelector("#audio03");
audio03.onplay = function(){
  document.querySelector("#melody02buttom02").classList.add("click");
  document.querySelector("#do11").classList.add("play02");
  document.querySelector("#do12").classList.add("play02");
  document.querySelector("#do13").classList.add("play02");
  document.querySelector("#so11").classList.add("play02");
  document.querySelector("#so12").classList.add("play02");
  document.querySelector("#so13").classList.add("play02");
  document.querySelector("#so14").classList.add("play02");
}
audio03.onpause = function(){
  audio03.currentTime = 0;
  document.querySelector("#melody02buttom02").classList.remove("click");
  document.querySelector("#melody02buttom01").classList.remove("click");
  document.querySelector("#do11").classList.remove("play02");
  document.querySelector("#do12").classList.remove("play02");
  document.querySelector("#do13").classList.remove("play02");
  document.querySelector("#so11").classList.remove("play02");
  document.querySelector("#so12").classList.remove("play02");
  document.querySelector("#so13").classList.remove("play02");
  document.querySelector("#so14").classList.remove("play02");
}


$(function() {
  $("#box1_1").click(function(){
    if ($(this).hasClass("active")) {}
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box1_2").removeClass("active");
      $("#box1_3").removeClass("active");
    }
  });
});
$(function() {
  $("#box1_2").click(function(){
    if ($(this).hasClass("active")) {}
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box1_1").removeClass("active");
      $("#box1_3").removeClass("active");
    }
  });
});
$(function() {
  $("#box1_3").click(function(){
    if ($(this).hasClass("active")) {}
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box1_1").removeClass("active");
      $("#box1_2").removeClass("active");
    }
  });
});

$(function() {
  $("#box2_1").click(function(){
    if ($(this).hasClass("active")) {
      $("#box2_1").removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $("#box2_1").addClass("active")
    }
  });
});

$(function() {
  $("#box3_1").click(function(){
    if ($(this).hasClass("active")) {
      $("#box3_1").removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $("#box3_1").addClass("active")
    }
  });
});

$(function() {
  $("#play01").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).text("▶︎再生");

      $('#audio1_0_0')[0].pause();
      $('#audio2_0_0')[0].pause();
      $('#audio3_0_0')[0].pause();

      $('#audio1_1_0')[0].pause();
      $('#audio2_1_0')[0].pause();
      $('#audio3_1_0')[0].pause();

      $('#audio1_0_1')[0].pause();
      $('#audio2_0_1')[0].pause();
      $('#audio3_0_1')[0].pause();

      $('#audio1_1_1')[0].pause();
      $('#audio2_1_1')[0].pause();
      $('#audio3_1_1')[0].pause();


      $('#audio1_0_0')[0].currentTime = 0;
      $('#audio2_0_0')[0].currentTime = 0;
      $('#audio3_0_0')[0].currentTime = 0;

      $('#audio1_1_0')[0].currentTime = 0;
      $('#audio2_1_0')[0].currentTime = 0;
      $('#audio3_1_0')[0].currentTime = 0;

      $('#audio1_0_1')[0].currentTime = 0;
      $('#audio2_0_1')[0].currentTime = 0;
      $('#audio3_0_1')[0].currentTime = 0;

      $('#audio1_1_1')[0].currentTime = 0;
      $('#audio2_1_1')[0].currentTime = 0;
      $('#audio3_1_1')[0].currentTime = 0;


      $("#box2_1").removeClass("play");

      $("#box3_1").removeClass("play");

      $("#box1_1").removeClass("play");
      $("#box1_2").removeClass("play");
      $("#box1_3").removeClass("play");
    }//if

    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).text("■停止");

      if ($("#box2_1").hasClass("active")) {
        if ($("#box3_1").hasClass("active")) {
          if ($("#box1_1").hasClass("active")) {
            $("#audio1_1_1")[0].play();
            $("#box2_1").addClass("play");
            $("#box3_1").addClass("play");
            $("#box1_1").addClass("play");
          }else {};
        }else {
            if ($("#box1_1").hasClass("active")) {
              $("#audio1_1_0")[0].play();
              $("#box2_1").addClass("play");
              $("#box1_1").addClass("play");
            }else {};
          };
        }else {
          if ($("#box3_1").hasClass("active")) {
            if ($("#box1_1").hasClass("active")) {
              $("#audio1_0_1")[0].play();
              $("#box3_1").addClass("play");
              $("#box1_1").addClass("play");
          }else {};
        }else {
          if ($("#box1_1").hasClass("active")) {
            $("#audio1_0_0")[0].play();
            $("#box1_1").addClass("play");
          }else {};
        };
      };

      if ($("#box2_1").hasClass("active")) {
        if ($("#box3_1").hasClass("active")) {
          if ($("#box1_2").hasClass("active")) {
            $("#audio2_1_1")[0].play();
            $("#box2_1").addClass("play");
            $("#box3_1").addClass("play");
            $("#box1_2").addClass("play");
          }else {};
        }else {
            if ($("#box1_2").hasClass("active")) {
              $("#audio2_1_0")[0].play();
              $("#box2_1").addClass("play");
              $("#box1_2").addClass("play");
            }else {};
          };
        }else {
          if ($("#box3_1").hasClass("active")) {
            if ($("#box1_2").hasClass("active")) {
              $("#audio2_0_1")[0].play();
              $("#box3_1").addClass("play");
              $("#box1_2").addClass("play");
          }else {};
        }else {
          if ($("#box1_2").hasClass("active")) {
            $("#audio2_0_0")[0].play();
            $("#box1_2").addClass("play");
          }else {};
        };
      };

      if ($("#box2_1").hasClass("active")) {
        if ($("#box3_1").hasClass("active")) {
          if ($("#box1_3").hasClass("active")) {
            $("#audio3_1_1")[0].play();
            $("#box2_1").addClass("play");
            $("#box3_1").addClass("play");
            $("#box1_3").addClass("play");
          }else {};
        }else {
            if ($("#box1_3").hasClass("active")) {
              $("#audio3_1_0")[0].play();
              $("#box2_1").addClass("play");
              $("#box1_3").addClass("play");
            }else {};
          };
        }else {
          if ($("#box3_1").hasClass("active")) {
            if ($("#box1_3").hasClass("active")) {
              $("#audio3_0_1")[0].play();
              $("#box3_1").addClass("play");
              $("#box1_3").addClass("play");
          }else {};
        }else {
          if ($("#box1_3").hasClass("active")) {
            $("#audio3_0_0")[0].play();
            $("#box1_3").addClass("play");
          }else {};
        };
      };

    }//if
  });
});

var play01 = document.querySelector("#play01");
document.querySelector("#audio1_0_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
});

document.querySelector("#audio2_0_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_2").removeClass("play");
});

document.querySelector("#audio3_0_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_3").removeClass("play");
});

document.querySelector("#audio1_1_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_1").removeClass("play");
});

document.querySelector("#audio2_1_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_2").removeClass("play");
    $("#box2_1").removeClass("play");
});

document.querySelector("#audio3_1_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_3").removeClass("play");
    $("#box2_1").removeClass("play");
});

document.querySelector("#audio1_0_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box3_1").removeClass("play");
    $("#box1_1").removeClass("play");
});

document.querySelector("#audio2_0_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box3_1").removeClass("play");
    $("#box1_2").removeClass("play");
});

document.querySelector("#audio3_0_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box3_1").removeClass("play");
    $("#box1_3").removeClass("play");
});

document.querySelector("#audio1_1_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_1").removeClass("play");
    $("#box1_1").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio2_1_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_1").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio3_1_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_1").removeClass("play");
    $("#box2_3").removeClass("play");
    $("#box3_1").removeClass("play");
});

$(function(){

  var bg01 = $('#position01').offset();
  var bg02 = $('#position02').offset();

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
  });
});
