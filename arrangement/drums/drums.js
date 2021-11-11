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
  audio04.currentTime = 0;
  document.querySelector("#doublestroke01").classList.add("click");
  //document.querySelector("#doublestroke02").classList.add("click");
  document.querySelector("#stick01").classList.add("double");
  document.querySelector("#audio04").play();
}
function doublestroke02(){
  document.querySelector("#audio04").pause();
  audio04.currentTime = 0;
}

var audio04 = document.querySelector("#audio04");
audio04.onpause = function(){
  document.querySelector("#doublestroke01").classList.remove("click");
  //document.querySelector("#doublestroke02").classList.rmeove("click");
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
  document.querySelector("#ta11").classList.add("flash01");
  document.querySelector("#ta12").classList.add("flash01");
  document.querySelector("#chi11").classList.add("flash01");
  document.querySelector("#chi12").classList.add("flash01");
  document.querySelector("#chi13").classList.add("flash01");
  document.querySelector("#chi14").classList.add("flash01");
  document.querySelector("#chi15").classList.add("flash01");
  document.querySelector("#chi16").classList.add("flash01");
  document.querySelector("#chi17").classList.add("flash01");
  document.querySelector("#chi18").classList.add("flash01");
  document.querySelector("#chi19").classList.add("flash01");
  document.querySelector("#chi20").classList.add("flash01");
  document.querySelector("#chi21").classList.add("flash01");
  document.querySelector("#chi22").classList.add("flash01");
  document.querySelector("#chi23").classList.add("flash01");
  document.querySelector("#chi24").classList.add("flash01");
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
  document.querySelector("#ta11").classList.remove("flash01");
  document.querySelector("#ta12").classList.remove("flash01");
  document.querySelector("#chi11").classList.remove("flash01");
  document.querySelector("#chi12").classList.remove("flash01");
  document.querySelector("#chi13").classList.remove("flash01");
  document.querySelector("#chi14").classList.remove("flash01");
  document.querySelector("#chi15").classList.remove("flash01");
  document.querySelector("#chi16").classList.remove("flash01");
  document.querySelector("#chi17").classList.remove("flash01");
  document.querySelector("#chi18").classList.remove("flash01");
  document.querySelector("#chi19").classList.remove("flash01");
  document.querySelector("#chi20").classList.remove("flash01");
  document.querySelector("#chi21").classList.remove("flash01");
  document.querySelector("#chi22").classList.remove("flash01");
  document.querySelector("#chi23").classList.remove("flash01");
  document.querySelector("#chi24").classList.remove("flash01");
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
    $("#box3_1").removeClass("play");
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

$(function(){

  var bg01 = $('#position01').offset();
  var bg02 = $('#position02').offset();
  var bg03 = $('#position03').offset();
  var bg04 = $('#position04').offset();

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
  });
});
