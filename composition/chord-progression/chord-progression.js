function c01btn01(){
  document.querySelector("#c01btn01").classList.add("click");
  document.querySelector("#audio01").play();
}
function c01btn02(){
  document.querySelector("#audio01").pause();
}

var audio01 = document.querySelector("#audio01");
audio01.onplay = function(){
  document.querySelector("#c01btn02").classList.add("click");
  document.querySelector("#c-01").classList.add("play01");
  document.querySelector("#e-01").classList.add("play01");
  document.querySelector("#g-01").classList.add("play01");
  document.querySelector("#cchord").classList.add("play01");
}
audio01.onpause = function(){
  audio01.currentTime = 0;
  document.querySelector("#c01btn02").classList.remove("click");
  document.querySelector("#c01btn01").classList.remove("click");
  document.querySelector("#c-01").classList.remove("play01");
  document.querySelector("#e-01").classList.remove("play01");
  document.querySelector("#g-01").classList.remove("play01");
  document.querySelector("#cchord").classList.remove("play01");
}

function chord01btn01(){
  document.querySelector("#chord01btn01").classList.add("click");
  document.querySelector("#audio02").play();
}
function chord01btn02(){
  document.querySelector("#audio02").pause();
}

var audio02 = document.querySelector("#audio02");
audio02.onplay = function(){
  document.querySelector("#chord01btn02").classList.add("click");
  document.querySelector("#chord01").classList.add("play01");
  document.querySelector("#chord02").classList.add("play01");
  document.querySelector("#chord03").classList.add("play01");
}

audio02.onpause = function(){
  audio02.currentTime = 0;
  document.querySelector("#chord01btn02").classList.remove("click");
  document.querySelector("#chord01btn01").classList.remove("click");
  document.querySelector("#chord01").classList.remove("play01");
  document.querySelector("#chord02").classList.remove("play01");
  document.querySelector("#chord03").classList.remove("play01");
}

function t1(){
  document.querySelector("#c").classList.remove("click01");
  document.querySelector("#d").classList.remove("click01");
  document.querySelector("#e").classList.remove("click01");
  document.querySelector("#f").classList.remove("click01");
  document.querySelector("#g").classList.remove("click01");
  document.querySelector("#a").classList.remove("click01");
  document.querySelector("#b").classList.remove("click01");

  document.querySelector("#c").classList.remove("click02");
  document.querySelector("#d").classList.remove("click02");
  document.querySelector("#e").classList.remove("click02");
  document.querySelector("#f").classList.remove("click02");
  document.querySelector("#g").classList.remove("click02");
  document.querySelector("#a").classList.remove("click02");
  document.querySelector("#b").classList.remove("click02");

  document.querySelector("#c").classList.add("click01");
  document.querySelector("#d").classList.add("click02")
  document.querySelector("#e").classList.add("click01");
  document.querySelector("#f").classList.add("click02")
  document.querySelector("#g").classList.add("click02")
  document.querySelector("#a").classList.add("click01");
  document.querySelector("#b").classList.add("click02")

  document.querySelector(".tdsd-01").classList.add("click");
  document.querySelector(".tdsd-02").classList.add("click");
  document.querySelector(".tonic01").classList.add("click");
  document.querySelector(".tonic02").classList.add("click");
  document.querySelector(".dominant01").classList.remove("click");
  document.querySelector(".dominant02").classList.remove("click");
  document.querySelector(".subdominant01").classList.remove("click");
  document.querySelector(".subdominant02").classList.remove("click");

  document.querySelector("#t1").classList.add("click");
  document.querySelector("#t2").classList.add("click");
  document.querySelector("#d1").classList.remove("click");
  document.querySelector("#d2").classList.remove("click");
  document.querySelector("#sd1").classList.remove("click");
  document.querySelector("#sd2").classList.remove("click");
}
function t2(){
  document.querySelector("#c").classList.remove("click01");
  document.querySelector("#d").classList.remove("click01");
  document.querySelector("#e").classList.remove("click01");
  document.querySelector("#f").classList.remove("click01");
  document.querySelector("#g").classList.remove("click01");
  document.querySelector("#a").classList.remove("click01");
  document.querySelector("#b").classList.remove("click01");

  document.querySelector("#c").classList.remove("click02");
  document.querySelector("#d").classList.remove("click02");
  document.querySelector("#e").classList.remove("click02");
  document.querySelector("#f").classList.remove("click02");
  document.querySelector("#g").classList.remove("click02");
  document.querySelector("#a").classList.remove("click02");
  document.querySelector("#b").classList.remove("click02");

  document.querySelector(".tdsd-01").classList.remove("click");
  document.querySelector(".tdsd-02").classList.remove("click");
  document.querySelector(".tonic01").classList.remove("click");
  document.querySelector(".tonic02").classList.remove("click");
  document.querySelector(".dominant01").classList.remove("click");
  document.querySelector(".dominant02").classList.remove("click");
  document.querySelector(".subdominant01").classList.remove("click");
  document.querySelector(".subdominant02").classList.remove("click");

  document.querySelector("#t1").classList.remove("click");
  document.querySelector("#t2").classList.remove("click");
}

function d1(){
  document.querySelector("#c").classList.remove("click01");
  document.querySelector("#d").classList.remove("click01");
  document.querySelector("#e").classList.remove("click01");
  document.querySelector("#f").classList.remove("click01");
  document.querySelector("#g").classList.remove("click01");
  document.querySelector("#a").classList.remove("click01");
  document.querySelector("#b").classList.remove("click01");

  document.querySelector("#c").classList.remove("click02");
  document.querySelector("#d").classList.remove("click02");
  document.querySelector("#e").classList.remove("click02");
  document.querySelector("#f").classList.remove("click02");
  document.querySelector("#g").classList.remove("click02");
  document.querySelector("#a").classList.remove("click02");
  document.querySelector("#b").classList.remove("click02");

  document.querySelector("#c").classList.add("click02");
  document.querySelector("#d").classList.add("click02");
  document.querySelector("#e").classList.add("click02");
  document.querySelector("#f").classList.add("click02");
  document.querySelector("#g").classList.add("click01");
  document.querySelector("#a").classList.add("click02");
  document.querySelector("#b").classList.add("click01");

  document.querySelector(".tdsd-01").classList.add("click");
  document.querySelector(".tdsd-02").classList.add("click");
  document.querySelector(".tonic01").classList.remove("click");
  document.querySelector(".tonic02").classList.remove("click");
  document.querySelector(".dominant01").classList.add("click");
  document.querySelector(".dominant02").classList.add("click");
  document.querySelector(".subdominant01").classList.remove("click");
  document.querySelector(".subdominant02").classList.remove("click");

  document.querySelector("#t1").classList.remove("click");
  document.querySelector("#t2").classList.remove("click");
  document.querySelector("#d1").classList.add("click");
  document.querySelector("#d2").classList.add("click");
  document.querySelector("#sd1").classList.remove("click");
  document.querySelector("#sd2").classList.remove("click");
}
function d2(){
  document.querySelector("#c").classList.remove("click01");
  document.querySelector("#d").classList.remove("click01");
  document.querySelector("#e").classList.remove("click01");
  document.querySelector("#f").classList.remove("click01");
  document.querySelector("#g").classList.remove("click01");
  document.querySelector("#a").classList.remove("click01");
  document.querySelector("#b").classList.remove("click01");

  document.querySelector("#c").classList.remove("click02");
  document.querySelector("#d").classList.remove("click02");
  document.querySelector("#e").classList.remove("click02");
  document.querySelector("#f").classList.remove("click02");
  document.querySelector("#g").classList.remove("click02");
  document.querySelector("#a").classList.remove("click02");
  document.querySelector("#b").classList.remove("click02");

  document.querySelector(".tdsd-01").classList.remove("click");
  document.querySelector(".tdsd-02").classList.remove("click");
  document.querySelector(".tonic01").classList.remove("click");
  document.querySelector(".tonic02").classList.remove("click");
  document.querySelector(".dominant01").classList.remove("click");
  document.querySelector(".dominant02").classList.remove("click");
  document.querySelector(".subdominant01").classList.remove("click");
  document.querySelector(".subdominant02").classList.remove("click");

  document.querySelector("#d1").classList.remove("click");
  document.querySelector("#d2").classList.remove("click");
}

function sd1(){
  document.querySelector("#c").classList.remove("click01");
  document.querySelector("#d").classList.remove("click01");
  document.querySelector("#e").classList.remove("click01");
  document.querySelector("#f").classList.remove("click01");
  document.querySelector("#g").classList.remove("click01");
  document.querySelector("#a").classList.remove("click01");
  document.querySelector("#b").classList.remove("click01");

  document.querySelector("#c").classList.remove("click02");
  document.querySelector("#d").classList.remove("click02");
  document.querySelector("#e").classList.remove("click02");
  document.querySelector("#f").classList.remove("click02");
  document.querySelector("#g").classList.remove("click02");
  document.querySelector("#a").classList.remove("click02");
  document.querySelector("#b").classList.remove("click02");

  document.querySelector("#c").classList.add("click02");
  document.querySelector("#d").classList.add("click01");
  document.querySelector("#e").classList.add("click02");
  document.querySelector("#f").classList.add("click01");
  document.querySelector("#g").classList.add("click02");
  document.querySelector("#a").classList.add("click02");
  document.querySelector("#b").classList.add("click02");

  document.querySelector(".tdsd-01").classList.add("click");
  document.querySelector(".tdsd-02").classList.add("click");
  document.querySelector(".tonic01").classList.remove("click");
  document.querySelector(".tonic02").classList.remove("click");
  document.querySelector(".dominant01").classList.remove("click");
  document.querySelector(".dominant02").classList.remove("click");
  document.querySelector(".subdominant01").classList.add("click");
  document.querySelector(".subdominant02").classList.add("click");

  document.querySelector("#t1").classList.remove("click");
  document.querySelector("#t2").classList.remove("click");
  document.querySelector("#d1").classList.remove("click");
  document.querySelector("#d2").classList.remove("click");
  document.querySelector("#sd1").classList.add("click");
  document.querySelector("#sd2").classList.add("click");
}
function sd2(){
  document.querySelector("#c").classList.remove("click01");
  document.querySelector("#d").classList.remove("click01");
  document.querySelector("#e").classList.remove("click01");
  document.querySelector("#f").classList.remove("click01");
  document.querySelector("#g").classList.remove("click01");
  document.querySelector("#a").classList.remove("click01");
  document.querySelector("#b").classList.remove("click01");

  document.querySelector("#c").classList.remove("click02");
  document.querySelector("#d").classList.remove("click02");
  document.querySelector("#e").classList.remove("click02");
  document.querySelector("#f").classList.remove("click02");
  document.querySelector("#g").classList.remove("click02");
  document.querySelector("#a").classList.remove("click02");
  document.querySelector("#b").classList.remove("click02");

  document.querySelector(".tdsd-01").classList.remove("click");
  document.querySelector(".tdsd-02").classList.remove("click");
  document.querySelector(".tonic01").classList.remove("click");
  document.querySelector(".tonic02").classList.remove("click");
  document.querySelector(".dominant01").classList.remove("click");
  document.querySelector(".dominant02").classList.remove("click");
  document.querySelector(".subdominant01").classList.remove("click");
  document.querySelector(".subdominant02").classList.remove("click");

  document.querySelector(".tdsd-01").classList.remove("click");
  document.querySelector("#sd1").classList.remove("click");
  document.querySelector("#sd2").classList.remove("click");
}

$(function() {
  $("#c_05").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).text("▶︎C");
      $("#audioC")[0].pause();

    }else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).text("■C");
      $("#audioC")[0].currentTime = 0;
      $("#audioC")[0].play();
      $("#c_10c1").addClass("play1");
      $("#c_10c2").addClass("play1");
      $("#c_10e").addClass("play1");
      $("#c_10g").addClass("play1");
      $("#c_10_1").addClass("play1");
      $("#c_10_2").addClass("play1");
      $("#c_10_3").addClass("play1");
      $("#c_10_4").addClass("play1");
    };
  });
});
document.querySelector("#audioC").onpause = function(){
  document.querySelector("#c_05").classList.remove("active");
  document.querySelector("#c_05").innerHTML = "▶︎C";
  $("#c_10c1").removeClass("play1");
  $("#c_10c2").removeClass("play1");
  $("#c_10e").removeClass("play1");
  $("#c_10g").removeClass("play1");
  $("#c_10_1").removeClass("play1");
  $("#c_10_2").removeClass("play1");
  $("#c_10_3").removeClass("play1");
  $("#c_10_4").removeClass("play1");
};

$(function() {
  $("#cm").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).text("▶︎Cm");
      $("#audioCm")[0].pause();

    }else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).text("■Cm");
      $("#audioCm")[0].currentTime = 0;
      $("#audioCm")[0].play();
      $("#mc1").addClass("play1");
      $("#mc2").addClass("play1");
      $("#meb1").addClass("play1");
      $("#meb2").addClass("play1");
      $("#mg").addClass("play1");
      $("#m1").addClass("play1");
      $("#m2").addClass("play1");
      $("#m3").addClass("play1");
      $("#m4").addClass("play1");
      $("#m5").addClass("play1");
    };
  });
});
document.querySelector("#audioCm").onpause = function(){
  document.querySelector("#cm").classList.remove("active");
  document.querySelector("#cm").innerHTML = "▶︎Cm";
  $("#mc1").removeClass("play1");
  $("#mc2").removeClass("play1");
  $("#meb1").removeClass("play1");
  $("#meb2").removeClass("play1");
  $("#mg").removeClass("play1");
  $("#m1").removeClass("play1");
  $("#m2").removeClass("play1");
  $("#m3").removeClass("play1");
  $("#m4").removeClass("play1");
  $("#m5").removeClass("play1");
};

$(function() {
  $("#cadd9").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).text("▶︎Cadd9");
      $("#audioCadd9")[0].pause();

    }else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).text("■Cadd9");
      $("#audioCadd9")[0].currentTime = 0;
      $("#audioCadd9")[0].play();
      $("#add9c_1").addClass("play1");
      $("#add9c_2").addClass("play1");
      $("#add9d").addClass("play1");
      $("#add9e").addClass("play1");
      $("#add9g").addClass("play1");
      $("#add9_1").addClass("play1");
      $("#add9_2").addClass("play1");
      $("#add9_3").addClass("play1");
      $("#add9_4").addClass("play1");
      $("#add9_5").addClass("play1");
    };
  });
});
document.querySelector("#audioCadd9").onpause = function(){
  document.querySelector("#cadd9").classList.remove("active");
  document.querySelector("#cadd9").innerHTML = "▶︎Cadd9";
  $("#add9c_1").removeClass("play1");
  $("#add9c_2").removeClass("play1");
  $("#add9d").removeClass("play1");
  $("#add9e").removeClass("play1");
  $("#add9g").removeClass("play1");
  $("#add9_1").removeClass("play1");
  $("#add9_2").removeClass("play1");
  $("#add9_3").removeClass("play1");
  $("#add9_4").removeClass("play1");
  $("#add9_5").removeClass("play1");
};

$(function() {
  $("#csus2").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).text("▶︎Csus2");
      $("#audioCsus2")[0].pause();

    }else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).text("■Csus2");
      $("#audioCsus2")[0].currentTime = 0;
      $("#audioCsus2")[0].play();
      $("#sus2c_1").addClass("play1");
      $("#sus2c_2").addClass("play1");
      $("#sus2d").addClass("play1");
      $("#sus2g").addClass("play1");
      $("#sus2_1").addClass("play1");
      $("#sus2_2").addClass("play1");
      $("#sus2_3").addClass("play1");
      $("#sus2_4").addClass("play1");
    };
  });
});
document.querySelector("#audioCsus2").onpause = function(){
  document.querySelector("#csus2").classList.remove("active");
  document.querySelector("#csus2").innerHTML = "▶︎Csus2";
  $("#sus2c_1").removeClass("play1");
  $("#sus2c_2").removeClass("play1");
  $("#sus2d").removeClass("play1");
  $("#sus2g").removeClass("play1");
  $("#sus2_1").removeClass("play1");
  $("#sus2_2").removeClass("play1");
  $("#sus2_3").removeClass("play1");
  $("#sus2_4").removeClass("play1");
};

$(function() {
  $("#csus4").click(function(){
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).text("▶︎Csus4");
      $("#audioCsus4")[0].pause();

    }else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).text("■Csus4");
      $("#audioCsus4")[0].currentTime = 0;
      $("#audioCsus4")[0].play();
      $("#sus4c_1").addClass("play1");
      $("#sus4c_2").addClass("play1");
      $("#sus4f").addClass("play1");
      $("#sus4g").addClass("play1");
      $("#sus4_1").addClass("play1");
      $("#sus4_2").addClass("play1");
      $("#sus4_3").addClass("play1");
      $("#sus4_4").addClass("play1");
    };
  });
});
document.querySelector("#audioCsus4").onpause = function(){
  document.querySelector("#csus4").classList.remove("active");
  document.querySelector("#csus4").innerHTML = "▶︎Csus4";
  $("#sus4c_1").removeClass("play1");
  $("#sus4c_2").removeClass("play1");
  $("#sus4f").removeClass("play1");
  $("#sus4g").removeClass("play1");
  $("#sus4_1").removeClass("play1");
  $("#sus4_2").removeClass("play1");
  $("#sus4_3").removeClass("play1");
  $("#sus4_4").removeClass("play1");
};

$(function() {
  $("#box1_1").click(function(){
    if ($(this).hasClass("active")) {
      $("#box1_1").removeClass("active");
    }
    else if (!$(this).hasClass("active")) {
      $("#box1_1").addClass("active")
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

      $('#audio0_1_0')[0].pause();
      $('#audio0_2_0')[0].pause();
      $('#audio0_3_0')[0].pause();

      $('#audio0_1_1')[0].pause();
      $('#audio0_2_1')[0].pause();
      $('#audio0_3_1')[0].pause();

      $('#audio1_1_0')[0].pause();
      $('#audio1_2_0')[0].pause();
      $('#audio1_3_0')[0].pause();

      $('#audio1_1_1')[0].pause();
      $('#audio1_2_1')[0].pause();
      $('#audio1_3_1')[0].pause();



      $('#audio0_1_0')[0].currentTime = 0;
      $('#audio0_2_0')[0].currentTime = 0;
      $('#audio0_3_0')[0].currentTime = 0;

      $('#audio0_1_1')[0].currentTime = 0;
      $('#audio0_2_1')[0].currentTime = 0;
      $('#audio0_3_1')[0].currentTime = 0;

      $('#audio1_1_0')[0].currentTime = 0;
      $('#audio1_2_0')[0].currentTime = 0;
      $('#audio1_3_0')[0].currentTime = 0;

      $('#audio1_1_1')[0].currentTime = 0;
      $('#audio1_2_1')[0].currentTime = 0;
      $('#audio1_3_1')[0].currentTime = 0;


      $("#box1_1").removeClass("play");

      $("#box3_1").removeClass("play");

      $("#box2_1").removeClass("play");
      $("#box2_2").removeClass("play");
      $("#box2_3").removeClass("play");
    }//if

    else if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).text("■停止");

      if ($("#box1_1").hasClass("active")) {
        if ($("#box3_1").hasClass("active")) {
          if ($("#box2_1").hasClass("active")) {
            $("#audio1_1_1")[0].play();
            $("#box1_1").addClass("play");
            $("#box3_1").addClass("play");
            $("#box2_1").addClass("play");
          }else {};
        }else {
            if ($("#box2_1").hasClass("active")) {
              $("#audio1_1_0")[0].play();
              $("#box1_1").addClass("play");
              $("#box2_1").addClass("play");
            }else {};
          };
        }else {
          if ($("#box3_1").hasClass("active")) {
            if ($("#box2_1").hasClass("active")) {
              $("#audio0_1_1")[0].play();
              $("#box3_1").addClass("play");
              $("#box2_1").addClass("play");
          }else {};
        }else {
          if ($("#box2_1").hasClass("active")) {
            $("#audio0_1_0")[0].play();
            $("#box2_1").addClass("play");
          }else {};
        };
      };

    if ($("#box1_1").hasClass("active")) {
      if ($("#box3_1").hasClass("active")) {
        if ($("#box2_2").hasClass("active")) {
          $("#audio1_2_1")[0].play();
          $("#box1_1").addClass("play");
          $("#box3_1").addClass("play");
          $("#box2_2").addClass("play");
        }else {};
      }else {
          if ($("#box2_2").hasClass("active")) {
            $("#audio1_2_0")[0].play();
            $("#box1_1").addClass("play");
            $("#box2_2").addClass("play");
          }else {};
        };
      }else {
        if ($("#box3_1").hasClass("active")) {
          if ($("#box2_2").hasClass("active")) {
            $("#audio0_2_1")[0].play();
            $("#box3_1").addClass("play");
            $("#box2_2").addClass("play");
        }else {};
      }else {
        if ($("#box2_2").hasClass("active")) {
          $("#audio0_2_0")[0].play();
          $("#box2_2").addClass("play");
        }else {};
      };
    };

    if ($("#box1_1").hasClass("active")) {
      if ($("#box3_1").hasClass("active")) {
        if ($("#box2_3").hasClass("active")) {
          $("#audio1_3_1")[0].play();
          $("#box1_1").addClass("play");
          $("#box3_1").addClass("play");
          $("#box2_3").addClass("play");
        }else {};
      }else {
          if ($("#box2_3").hasClass("active")) {
            $("#audio1_3_0")[0].play();
            $("#box1_1").addClass("play");
            $("#box2_3").addClass("play");
          }else {};
        };
      }else {
        if ($("#box3_1").hasClass("active")) {
          if ($("#box2_3").hasClass("active")) {
            $("#audio0_3_1")[0].play();
            $("#box3_1").addClass("play");
            $("#box2_3").addClass("play");
        }else {};
    }else {
      if ($("#box2_3").hasClass("active")) {
        $("#audio0_3_0")[0].play();
        $("#box2_3").addClass("play");
      }else {};
    };
  };


    }//if
  });
});

var play01 = document.querySelector("#play01");
document.querySelector("#audio0_1_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_1").removeClass("play");
});

document.querySelector("#audio0_2_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_2").removeClass("play");
});

document.querySelector("#audio0_3_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_3").removeClass("play");
});

document.querySelector("#audio0_1_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_1").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio0_2_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_2").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio0_3_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box2_3").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio1_1_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_1").removeClass("play");
});

document.querySelector("#audio1_2_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_2").removeClass("play");
});

document.querySelector("#audio1_3_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_3").removeClass("play");
});

document.querySelector("#audio1_1_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_1").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio1_2_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
    $("#box2_2").removeClass("play");
    $("#box3_1").removeClass("play");
});

document.querySelector("#audio1_3_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    $("#box1_1").removeClass("play");
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
