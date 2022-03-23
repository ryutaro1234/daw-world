window.addEventListener("load", () => {
  document.getElementById("main-image").classList.add("active");
});

$(function() {
  $("#box1_1").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active")
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
    }
  });
});


$(function() {
  $("#box2_1").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active")
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box2_2").removeClass("active");
    }
  });
});

$(function() {
  $("#box2_2").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active")
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box2_1").removeClass("active");
    }
  });
});



$(function() {
  $("#box3_1").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active")
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box3_2").removeClass("active");
    }
  });
});

$(function() {
  $("#box3_2").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active")
    }
    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $("#box3_1").removeClass("active");
    }
  });
});

$(function() {
  $("#play01").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).text("▶︎再生");

      $('#audio0_0_1')[0].pause();
      $('#audio0_0_2')[0].pause();
      $('#audio0_1_0')[0].pause();
      $('#audio0_1_1')[0].pause();
      $('#audio0_1_2')[0].pause();

      $('#audio0_2_0')[0].pause();
      $('#audio0_2_1')[0].pause();
      $('#audio0_2_2')[0].pause();

      $('#audio1_0_0')[0].pause();
      $('#audio1_0_1')[0].pause();
      $('#audio1_0_2')[0].pause();
      $('#audio1_1_0')[0].pause();
      $('#audio1_1_1')[0].pause();
      $('#audio1_1_2')[0].pause();

      $('#audio1_2_0')[0].pause();
      $('#audio1_2_1')[0].pause();
      $('#audio1_2_2')[0].pause();


      $('#audio0_0_1')[0].currentTime = 0;
      $('#audio0_0_2')[0].currentTime = 0;
      $('#audio0_1_0')[0].currentTime = 0;
      $('#audio0_1_1')[0].currentTime = 0;
      $('#audio0_1_2')[0].currentTime = 0;

      $('#audio0_2_0')[0].currentTime = 0;
      $('#audio0_2_1')[0].currentTime = 0;
      $('#audio0_2_2')[0].currentTime = 0;

      $('#audio1_0_0')[0].currentTime = 0;
      $('#audio1_0_1')[0].currentTime = 0;
      $('#audio1_0_2')[0].currentTime = 0;
      $('#audio1_1_0')[0].currentTime = 0;
      $('#audio1_1_1')[0].currentTime = 0;
      $('#audio1_1_2')[0].currentTime = 0;

      $('#audio1_2_0')[0].currentTime = 0;
      $('#audio1_2_1')[0].currentTime = 0;
      $('#audio1_2_2')[0].currentTime = 0;


      $("#box1_1").removeClass("play");

      $("#box2_1").removeClass("play");
      $("#box2_2").removeClass("play");

      $("#box3_1").removeClass("play");
      $("#box3_2").removeClass("play");
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
          }else {
            if ($("#box3_2").hasClass("active")) {
              $("#audio1_1_2")[0].play();
              $("#box1_1").addClass("play");
              $("#box2_1").addClass("play");
              $("#box3_2").addClass("play");
            }else {
              $("#audio1_1_0")[0].play();
              $("#box1_1").addClass("play");
              $("#box2_1").addClass("play");
            };
          };
        }else {
          if ($("#box2_2").hasClass("active")) {
            if ($("#box3_1").hasClass("active")) {
              $("#audio1_2_1")[0].play();
              $("#box1_1").addClass("play");
              $("#box2_2").addClass("play");
              $("#box3_1").addClass("play");
            }else {
              if ($("#box3_2").hasClass("active")) {
                $("#audio1_2_2")[0].play();
                $("#box1_1").addClass("play");
                $("#box2_2").addClass("play");
                $("#box3_2").addClass("play");
              }else {
                $("#audio1_2_0")[0].play();
                $("#box1_1").addClass("play");
                $("#box2_2").addClass("play");
              };
            };
          }else {
            if ($("#box3_1").hasClass("active")) {
              $("#audio1_0_1")[0].play();
              $("#box1_1").addClass("play");
              $("#box3_1").addClass("play");
            }else {
              if ($("#box3_2").hasClass("active")) {
                $("#audio1_0_2")[0].play();
                $("#box1_1").addClass("play");
                $("#box3_2").addClass("play");
              }else {
                $("#audio1_0_0")[0].play();
                $("#box1_1").addClass("play");
              };
            };
          };
        };
      }else {
        if ($("#box2_1").hasClass("active")) {
          if ($("#box3_1").hasClass("active")) {
            $("#audio0_1_1")[0].play()
            $("#box2_1").addClass("play");
            $("#box3_1").addClass("play");
          }else {
            if ($("#box3_2").hasClass("active")) {
              $("#audio0_1_2")[0].play();
              $("#box2_1").addClass("play");
              $("#box3_2").addClass("play");
            }else {
              $("#audio0_1_0")[0].play();
              $("#box2_1").addClass("play");
            };
          };
        }else {
          if ($("#box2_2").hasClass("active")) {
            if ($("#box3_1").hasClass("active")) {
              $("#audio0_2_1")[0].play();
              $("#box2_2").addClass("play");
              $("#box3_1").addClass("play");
            }else {
              if ($("#box3_2").hasClass("active")) {
                $("#audio0_2_2")[0].play();
                $("#box2_2").addClass("play");
                $("#box3_2").addClass("play");
              }else {
                $("#audio0_2_0")[0].play();
                $("#box2_2").addClass("play");
              };
            };
          }else {
            if ($("#box3_1").hasClass("active")) {
              $("#audio0_0_1")[0].play();
              $("#box3_1").addClass("play");
            }else {
              if ($("#box3_2").hasClass("active")) {
                $("#audio0_0_2")[0].play();
                $("#box3_2").addClass("play");
              }else {};
            };
          };
        };
      };
    }//if
  });
});

var play01 = document.querySelector("#play01");
document.querySelector("#audio0_0_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio0_0_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio0_1_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_1").removeClass("play");
});

document.querySelector("#audio0_1_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_1").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio0_1_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_1").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio0_2_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_2").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio0_2_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_2").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio1_0_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
});

document.querySelector("#audio1_0_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio1_0_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box3_2").removeClass("play");
});

document.querySelector("#audio1_1_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_1").removeClass("play");
});

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

document.querySelector("#audio1_2_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_2").removeClass("play");
});

document.querySelector("#audio1_2_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio1_2_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_2").removeClass("play");
});


$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#main-image').addClass('add');
    } else {
      $('#main-image').removeClass('add');
    }
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#dot_box').addClass('active');
    } else {
      $('#dot_box').removeClass('active');
    }
  });
});
