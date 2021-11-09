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
    };
  });
});
document.querySelector("#audioC").onpause = function(){
  document.querySelector("#c_05").classList.remove("active");
  document.querySelector("#c_05").innerHTML = "▶︎C";
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
    };
  });
});
document.querySelector("#audioCm").onpause = function(){
  document.querySelector("#cm").classList.remove("active");
  document.querySelector("#cm").innerHTML = "▶︎Cm";
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
    };
  });
});
document.querySelector("#audioCadd9").onpause = function(){
  document.querySelector("#cadd9").classList.remove("active");
  document.querySelector("#cadd9").innerHTML = "▶︎Cadd9";
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
    };
  });
});
document.querySelector("#audioCsus2").onpause = function(){
  document.querySelector("#csus2").classList.remove("active");
  document.querySelector("#csus2").innerHTML = "▶︎Csus2";
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
    };
  });
});
document.querySelector("#audioCsus4").onpause = function(){
  document.querySelector("#csus4").classList.remove("active");
  document.querySelector("#csus4").innerHTML = "▶︎Csus4";
};

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
