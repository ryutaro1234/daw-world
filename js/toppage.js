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

window.addEventListener("load", () => {
  document.getElementById("bg05").classList.add("-visible");
});

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
    if ($(this).hasClass("active")) {}
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box2_2").removeClass("active");
      $("#box2_3").removeClass("active");
    }
  });
});

$(function() {
  $("#box2_2").click(function(){
    if ($(this).hasClass("active")) {}
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box2_1").removeClass("active");
      $("#box2_3").removeClass("active");
    }
  });
});

$(function() {
  $("#box2_3").click(function(){
    if ($(this).hasClass("active")) {}
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box2_1").removeClass("active");
      $("#box2_2").removeClass("active");
    }
  });
});



$(function() {
  $("#box3_1").click(function(){
    if ($(this).hasClass("active")) {}
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box3_2").removeClass("active");
      $("#box3_3").removeClass("active");
    }
  });
});

$(function() {
  $("#box3_2").click(function(){
    if ($(this).hasClass("active")) {}
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box3_1").removeClass("active");
      $("#box3_3").removeClass("active");
    }
  });
});

$(function() {
  $("#box3_3").click(function(){
    if ($(this).hasClass("active")) {}
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box3_1").removeClass("active");
      $("#box3_2").removeClass("active");
    }
  });
});

$(function() {
  $("#play01").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).text("▶︎再生");

      $('#audio1_1_1')[0].pause();
      $('#audio1_2_1')[0].pause();
      $('#audio1_3_1')[0].pause();

      $('#audio1_1_2')[0].pause();
      $('#audio1_2_2')[0].pause();
      $('#audio1_3_2')[0].pause();

      $('#audio1_1_3')[0].pause();
      $('#audio1_2_3')[0].pause();
      $('#audio1_3_3')[0].pause();


      $('#audio2_1_1')[0].pause();
      $('#audio2_2_1')[0].pause();
      $('#audio2_3_1')[0].pause();

      $('#audio2_1_2')[0].pause();
      $('#audio2_2_2')[0].pause();
      $('#audio2_3_2')[0].pause();

      $('#audio2_1_3')[0].pause();
      $('#audio2_2_3')[0].pause();
      $('#audio2_3_3')[0].pause();


      $('#audio3_1_1')[0].pause();
      $('#audio3_2_1')[0].pause();
      $('#audio3_3_1')[0].pause();

      $('#audio3_1_2')[0].pause();
      $('#audio3_2_2')[0].pause();
      $('#audio3_3_2')[0].pause();

      $('#audio3_1_3')[0].pause();
      $('#audio3_2_3')[0].pause();
      $('#audio3_3_3')[0].pause();


      $('#audio1_1_1')[0].currentTime = 0;
      $('#audio1_2_1')[0].currentTime = 0;
      $('#audio1_3_1')[0].currentTime = 0;

      $('#audio1_1_2')[0].currentTime = 0;
      $('#audio1_2_2')[0].currentTime = 0;
      $('#audio1_3_2')[0].currentTime = 0;

      $('#audio1_1_3')[0].currentTime = 0;
      $('#audio1_2_3')[0].currentTime = 0;
      $('#audio1_3_3')[0].currentTime = 0;


      $('#audio2_1_1')[0].currentTime = 0;
      $('#audio2_2_1')[0].currentTime = 0;
      $('#audio2_3_1')[0].currentTime = 0;

      $('#audio2_1_2')[0].currentTime = 0;
      $('#audio2_2_2')[0].currentTime = 0;
      $('#audio2_3_2')[0].currentTime = 0;

      $('#audio2_1_3')[0].currentTime = 0;
      $('#audio2_2_3')[0].currentTime = 0;
      $('#audio2_3_3')[0].currentTime = 0;


      $('#audio3_1_1')[0].currentTime = 0;
      $('#audio3_2_1')[0].currentTime = 0;
      $('#audio3_3_1')[0].currentTime = 0;

      $('#audio3_1_2')[0].currentTime = 0;
      $('#audio3_2_2')[0].currentTime = 0;
      $('#audio3_3_2')[0].currentTime = 0;

      $('#audio3_1_3')[0].currentTime = 0;
      $('#audio3_2_3')[0].currentTime = 0;
      $('#audio3_3_3')[0].currentTime = 0;


      $("#box1_1").removeClass("play");
      $("#box1_2").removeClass("play");
      $("#box1_3").removeClass("play");

      $("#box2_1").removeClass("play");
      $("#box2_2").removeClass("play");
      $("#box2_3").removeClass("play");

      $("#box3_1").removeClass("play");
      $("#box3_2").removeClass("play");
      $("#box3_3").removeClass("play");
    }//if

    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).text("■停止");

      if ($("#box1_1").hasClass("active")) {
        if ($("#box2_1").hasClass("active")) {
          if ($("#box3_1").hasClass("active")) {
            $("#audio1_1_1")[0].play();
            $("#box1_1").addClass("play");
            $("#box2_1").addClass("play");
            $("#box3_1").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_1").hasClass("active")) {
        if ($("#box2_1").hasClass("active")) {
          if ($("#box3_2").hasClass("active")) {
            $("#audio1_1_2")[0].play();
            $("#box1_1").addClass("play");
            $("#box2_1").addClass("play");
            $("#box3_2").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_1").hasClass("active")) {
        if ($("#box2_1").hasClass("active")) {
          if ($("#box3_3").hasClass("active")) {
            $("#audio1_1_3")[0].play();
            $("#box1_1").addClass("play");
            $("#box2_1").addClass("play");
            $("#box3_3").addClass("play");
          }else {};
        }else {};
      }else {};


      if ($("#box1_1").hasClass("active")) {
        if ($("#box2_2").hasClass("active")) {
          if ($("#box3_1").hasClass("active")) {
            $("#audio1_2_1")[0].play();
            $("#box1_1").addClass("play");
            $("#box2_2").addClass("play");
            $("#box3_1").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_1").hasClass("active")) {
        if ($("#box2_2").hasClass("active")) {
          if ($("#box3_2").hasClass("active")) {
            $("#audio1_2_2")[0].play();
            $("#box1_1").addClass("play");
            $("#box2_2").addClass("play");
            $("#box3_2").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_1").hasClass("active")) {
        if ($("#box2_2").hasClass("active")) {
          if ($("#box3_3").hasClass("active")) {
            $("#audio1_2_3")[0].play();
            $("#box1_1").addClass("play");
            $("#box2_2").addClass("play");
            $("#box3_3").addClass("play");
          }else {};
        }else {};
      }else {};


      if ($("#box1_1").hasClass("active")) {
        if ($("#box2_3").hasClass("active")) {
          if ($("#box3_1").hasClass("active")) {
            $("#audio1_3_1")[0].play();
            $("#box1_1").addClass("play");
            $("#box2_3").addClass("play");
            $("#box3_1").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_1").hasClass("active")) {
        if ($("#box2_3").hasClass("active")) {
          if ($("#box3_2").hasClass("active")) {
            $("#audio1_3_2")[0].play();
            $("#box1_1").addClass("play");
            $("#box2_3").addClass("play");
            $("#box3_2").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_1").hasClass("active")) {
        if ($("#box2_3").hasClass("active")) {
          if ($("#box3_3").hasClass("active")) {
            $("#audio1_3_3")[0].play();
            $("#box1_1").addClass("play");
            $("#box2_3").addClass("play");
            $("#box3_3").addClass("play");
          }else {};
        }else {};
      }else {};



      if ($("#box1_2").hasClass("active")) {
        if ($("#box2_1").hasClass("active")) {
          if ($("#box3_1").hasClass("active")) {
            $("#audio2_1_1")[0].play();
            $("#box1_2").addClass("play");
            $("#box2_1").addClass("play");
            $("#box3_1").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_2").hasClass("active")) {
        if ($("#box2_1").hasClass("active")) {
          if ($("#box3_2").hasClass("active")) {
            $("#audio2_1_2")[0].play();
            $("#box1_2").addClass("play");
            $("#box2_1").addClass("play");
            $("#box3_2").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_2").hasClass("active")) {
        if ($("#box2_1").hasClass("active")) {
          if ($("#box3_3").hasClass("active")) {
            $("#audio2_1_3")[0].play();
            $("#box1_2").addClass("play");
            $("#box2_1").addClass("play");
            $("#box3_3").addClass("play");
          }else {};
        }else {};
      }else {};


      if ($("#box1_2").hasClass("active")) {
        if ($("#box2_2").hasClass("active")) {
          if ($("#box3_1").hasClass("active")) {
            $("#audio2_2_1")[0].play();
            $("#box1_2").addClass("play");
            $("#box2_2").addClass("play");
            $("#box3_1").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_2").hasClass("active")) {
        if ($("#box2_2").hasClass("active")) {
          if ($("#box3_2").hasClass("active")) {
            $("#audio2_2_2")[0].play();
            $("#box1_2").addClass("play");
            $("#box2_2").addClass("play");
            $("#box3_2").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_2").hasClass("active")) {
        if ($("#box2_2").hasClass("active")) {
          if ($("#box3_3").hasClass("active")) {
            $("#audio2_2_3")[0].play();
            $("#box1_2").addClass("play");
            $("#box2_2").addClass("play");
            $("#box3_3").addClass("play");
          }else {};
        }else {};
      }else {};


      if ($("#box1_2").hasClass("active")) {
        if ($("#box2_3").hasClass("active")) {
          if ($("#box3_1").hasClass("active")) {
            $("#audio2_3_1")[0].play();
            $("#box1_2").addClass("play");
            $("#box2_3").addClass("play");
            $("#box3_1").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_2").hasClass("active")) {
        if ($("#box2_3").hasClass("active")) {
          if ($("#box3_2").hasClass("active")) {
            $("#audio2_3_2")[0].play();
            $("#box1_2").addClass("play");
            $("#box2_3").addClass("play");
            $("#box3_2").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_2").hasClass("active")) {
        if ($("#box2_3").hasClass("active")) {
          if ($("#box3_3").hasClass("active")) {
            $("#audio2_3_3")[0].play();
            $("#box1_2").addClass("play");
            $("#box2_3").addClass("play");
            $("#box3_3").addClass("play");
          }else {};
        }else {};
      }else {};



      if ($("#box1_3").hasClass("active")) {
        if ($("#box2_1").hasClass("active")) {
          if ($("#box3_1").hasClass("active")) {
            $("#audio3_1_1")[0].play();
            $("#box1_3").addClass("play");
            $("#box2_1").addClass("play");
            $("#box3_1").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_3").hasClass("active")) {
        if ($("#box2_1").hasClass("active")) {
          if ($("#box3_2").hasClass("active")) {
            $("#audio3_1_2")[0].play();
            $("#box1_3").addClass("play");
            $("#box2_1").addClass("play");
            $("#box3_2").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_3").hasClass("active")) {
        if ($("#box2_1").hasClass("active")) {
          if ($("#box3_3").hasClass("active")) {
            $("#audio3_1_3")[0].play();
            $("#box1_3").addClass("play");
            $("#box2_1").addClass("play");
            $("#box3_3").addClass("play");
          }else {};
        }else {};
      }else {};


      if ($("#box1_3").hasClass("active")) {
        if ($("#box2_2").hasClass("active")) {
          if ($("#box3_1").hasClass("active")) {
            $("#audio3_2_1")[0].play();
            $("#box1_3").addClass("play");
            $("#box2_2").addClass("play");
            $("#box3_1").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_3").hasClass("active")) {
        if ($("#box2_2").hasClass("active")) {
          if ($("#box3_2").hasClass("active")) {
            $("#audio3_2_2")[0].play();
            $("#box1_3").addClass("play");
            $("#box2_2").addClass("play");
            $("#box3_2").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_3").hasClass("active")) {
        if ($("#box2_2").hasClass("active")) {
          if ($("#box3_3").hasClass("active")) {
            $("#audio3_2_3")[0].play();
            $("#box1_3").addClass("play");
            $("#box2_2").addClass("play");
            $("#box3_3").addClass("play");
          }else {};
        }else {};
      }else {};


      if ($("#box1_3").hasClass("active")) {
        if ($("#box2_3").hasClass("active")) {
          if ($("#box3_1").hasClass("active")) {
            $("#audio3_3_1")[0].play();
            $("#box1_3").addClass("play");
            $("#box2_3").addClass("play");
            $("#box3_1").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_3").hasClass("active")) {
        if ($("#box2_3").hasClass("active")) {
          if ($("#box3_2").hasClass("active")) {
            $("#audio3_3_2")[0].play();
            $("#box1_3").addClass("play");
            $("#box2_3").addClass("play");
            $("#box3_2").addClass("play");
          }else {};
        }else {};
      }else {};

      if ($("#box1_3").hasClass("active")) {
        if ($("#box2_3").hasClass("active")) {
          if ($("#box3_3").hasClass("active")) {
            $("#audio3_3_3")[0].play();
            $("#box1_3").addClass("play");
            $("#box2_3").addClass("play");
            $("#box3_3").addClass("play");
          }else {};
        }else {};
      }else {};
    }//if
  });
});

var play01 = document.querySelector("#play01");
document.querySelector("#audio1_1_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_1").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio1_1_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_1").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio1_1_3").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_1").removeClass("play");
    $("#box3_3").removeClass("play");
});

document.querySelector("#audio1_2_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio1_2_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio1_2_3").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_3").removeClass("play");
});

document.querySelector("#audio1_3_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_3").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio1_3_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_3").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio1_3_3").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_3").removeClass("play");
    $("#box3_3").removeClass("play");
});


document.querySelector("#audio2_1_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_2").removeClass("play");
    $("#box2_1").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio2_1_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_2").removeClass("play");
    $("#box2_1").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio2_1_3").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_2").removeClass("play");
    $("#box2_1").removeClass("play");
    $("#box3_3").removeClass("play");
});

document.querySelector("#audio2_2_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_2").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio2_2_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_2").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio2_2_3").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_2").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_3").removeClass("play");
});

document.querySelector("#audio2_3_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_2").removeClass("play");
    $("#box2_3").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio2_3_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_2").removeClass("play");
    $("#box2_3").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio2_3_3").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_2").removeClass("play");
    $("#box2_3").removeClass("play");
    $("#box3_3").removeClass("play");
});


document.querySelector("#audio3_1_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_3").removeClass("play");
    $("#box2_1").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio3_1_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_3").removeClass("play");
    $("#box2_1").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio3_1_3").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_3").removeClass("play");
    $("#box2_1").removeClass("play");
    $("#box3_3").removeClass("play");
});

document.querySelector("#audio3_2_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_3").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio3_2_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_3").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio3_2_3").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_3").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_3").removeClass("play");
});

document.querySelector("#audio3_3_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_3").removeClass("play");
    $("#box2_3").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio3_3_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_3").removeClass("play");
    $("#box2_3").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio3_3_3").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_3").removeClass("play");
    $("#box2_3").removeClass("play");
    $("#box3_3").removeClass("play");
});
