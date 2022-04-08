function c01btn01() {
  document.querySelector("#c01btn01").classList.add("click");
  document.querySelector("#audio01").play();
}

function c01btn02() {
  document.querySelector("#audio01").pause();
}

var audio01 = document.querySelector("#audio01");
audio01.onplay = function() {
  document.querySelector("#c01btn02").classList.add("click");
  document.querySelector("#c-01").classList.add("play01");
  document.querySelector("#e-01").classList.add("play01");
  document.querySelector("#g-01").classList.add("play01");
  document.querySelector("#cchord").classList.add("play01");
}
audio01.onpause = function() {
  audio01.currentTime = 0;
  document.querySelector("#c01btn02").classList.remove("click");
  document.querySelector("#c01btn01").classList.remove("click");
  document.querySelector("#c-01").classList.remove("play01");
  document.querySelector("#e-01").classList.remove("play01");
  document.querySelector("#g-01").classList.remove("play01");
  document.querySelector("#cchord").classList.remove("play01");
}

function chord01btn01() {
  document.querySelector("#chord01btn01").classList.add("click");
  document.querySelector("#audio02").play();
}

function chord01btn02() {
  document.querySelector("#audio02").pause();
}

var audio02 = document.querySelector("#audio02");
audio02.onplay = function() {
  document.querySelector("#chord01btn02").classList.add("click");
  document.querySelector("#chord01").classList.add("play01");
  document.querySelector("#chord02").classList.add("play01");
  document.querySelector("#chord03").classList.add("play01");
}

audio02.onpause = function() {
  audio02.currentTime = 0;
  document.querySelector("#chord01btn02").classList.remove("click");
  document.querySelector("#chord01btn01").classList.remove("click");
  document.querySelector("#chord01").classList.remove("play01");
  document.querySelector("#chord02").classList.remove("play01");
  document.querySelector("#chord03").classList.remove("play01");
}

function t1() {
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

function t2() {
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

function d1() {
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

function d2() {
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

function sd1() {
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

function sd2() {
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


document.querySelector("#c_05").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    this.innerHTML = "▶︎C";
    document.querySelector("#audioC").pause();

  } else {
    this.classList.add("active");
    this.innerHTML = "■C";
    document.querySelector("#audioC").currentTime = 0;
    document.querySelector("#audioC").play();
    document.querySelector("#c_10c1").classList.add("play1");
    document.querySelector("#c_10c2").classList.add("play1");
    document.querySelector("#c_10e").classList.add("play1");
    document.querySelector("#c_10g").classList.add("play1");
    document.querySelector("#c_10_1").classList.add("play1");
    document.querySelector("#c_10_2").classList.add("play1");
    document.querySelector("#c_10_3").classList.add("play1");
    document.querySelector("#c_10_4").classList.add("play1");
  };
};

document.querySelector("#audioC").onpause = function() {
  document.querySelector("#c_05").classList.remove("active");
  document.querySelector("#c_05").innerHTML = "▶︎C";
  document.querySelector("#c_10c1").classList.remove("play1");
  document.querySelector("#c_10c2").classList.remove("play1");
  document.querySelector("#c_10e").classList.remove("play1");
  document.querySelector("#c_10g").classList.remove("play1");
  document.querySelector("#c_10_1").classList.remove("play1");
  document.querySelector("#c_10_2").classList.remove("play1");
  document.querySelector("#c_10_3").classList.remove("play1");
  document.querySelector("#c_10_4").classList.remove("play1");
};

document.querySelector("#cm").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    this.innerHTML = "▶︎Cm";
    document.querySelector("#audioCm").pause();

  } else {
    this.classList.add("active");
    this.innerHTML = "■Cm";
    document.querySelector("#audioCm").currentTime = 0;
    document.querySelector("#audioCm").play();
    document.querySelector("#mc1").classList.add("play1");
    document.querySelector("#mc2").classList.add("play1");
    document.querySelector("#meb1").classList.add("play1");
    document.querySelector("#meb2").classList.add("play1");
    document.querySelector("#mg").classList.add("play1");
    document.querySelector("#m1").classList.add("play1");
    document.querySelector("#m2").classList.add("play1");
    document.querySelector("#m3").classList.add("play1");
    document.querySelector("#m4").classList.add("play1");
    document.querySelector("#m5").classList.add("play1");
  };
};

document.querySelector("#audioCm").onpause = function() {
  document.querySelector("#cm").classList.remove("active");
  document.querySelector("#cm").innerHTML = "▶︎Cm";
  document.querySelector("#mc1").classList.remove("play1");
  document.querySelector("#mc2").classList.remove("play1");
  document.querySelector("#meb1").classList.remove("play1");
  document.querySelector("#meb2").classList.remove("play1");
  document.querySelector("#mg").classList.remove("play1");
  document.querySelector("#m1").classList.remove("play1");
  document.querySelector("#m2").classList.remove("play1");
  document.querySelector("#m3").classList.remove("play1");
  document.querySelector("#m4").classList.remove("play1");
  document.querySelector("#m5").classList.remove("play1");
};

document.querySelector("#cadd9").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    this.textContent = "▶︎Cadd9";
    document.querySelector("#audioCadd9").pause();

  } else {
    this.classList.add("active");
    this.textContent = "■Cadd9";
    document.querySelector("#audioCadd9").currentTime = 0;
    document.querySelector("#audioCadd9").play();
    document.querySelector("#add9c_1").classList.add("play1");
    document.querySelector("#add9c_2").classList.add("play1");
    document.querySelector("#add9d").classList.add("play1");
    document.querySelector("#add9e").classList.add("play1");
    document.querySelector("#add9g").classList.add("play1");
    document.querySelector("#add9_1").classList.add("play1");
    document.querySelector("#add9_2").classList.add("play1");
    document.querySelector("#add9_3").classList.add("play1");
    document.querySelector("#add9_4").classList.add("play1");
    document.querySelector("#add9_5").classList.add("play1");
  };
};
document.querySelector("#audioCadd9").onpause = function() {
  document.querySelector("#cadd9").classList.remove("active");
  document.querySelector("#cadd9").innerHTML = "▶︎Cadd9";
  document.querySelector("#add9c_1").classList.remove("play1");
  document.querySelector("#add9c_2").classList.remove("play1");
  document.querySelector("#add9d").classList.remove("play1");
  document.querySelector("#add9e").classList.remove("play1");
  document.querySelector("#add9g").classList.remove("play1");
  document.querySelector("#add9_1").classList.remove("play1");
  document.querySelector("#add9_2").classList.remove("play1");
  document.querySelector("#add9_3").classList.remove("play1");
  document.querySelector("#add9_4").classList.remove("play1");
  document.querySelector("#add9_5").classList.remove("play1");
};

document.querySelector("#csus2").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    this.textContent = "▶︎Csus2";
    document.querySelector("#audioCsus2").pause();

  } else {
    this.classList.add("active");
    this.textContent = "■Csus2";
    document.querySelector("#audioCsus2").currentTime = 0;
    document.querySelector("#audioCsus2").play();
    document.querySelector("#sus2c_1").classList.add("play1");
    document.querySelector("#sus2c_2").classList.add("play1");
    document.querySelector("#sus2d").classList.add("play1");
    document.querySelector("#sus2g").classList.add("play1");
    document.querySelector("#sus2_1").classList.add("play1");
    document.querySelector("#sus2_2").classList.add("play1");
    document.querySelector("#sus2_3").classList.add("play1");
    document.querySelector("#sus2_4").classList.add("play1");
  };
};

document.querySelector("#audioCsus2").onpause = function() {
  document.querySelector("#csus2").classList.remove("active");
  document.querySelector("#csus2").innerHTML = "▶︎Csus2";
  document.querySelector("#sus2c_1").classList.remove("play1");
  document.querySelector("#sus2c_2").classList.remove("play1");
  document.querySelector("#sus2d").classList.remove("play1");
  document.querySelector("#sus2g").classList.remove("play1");
  document.querySelector("#sus2_1").classList.remove("play1");
  document.querySelector("#sus2_2").classList.remove("play1");
  document.querySelector("#sus2_3").classList.remove("play1");
  document.querySelector("#sus2_4").classList.remove("play1");
};

document.querySelector("#csus4").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    this.textContent = "▶︎Csus4";
    document.querySelector("#audioCsus4").pause();

  } else {
    this.classList.add("active");
    this.textContent = "■Csus4";
    document.querySelector("#audioCsus4").currentTime = 0;
    document.querySelector("#audioCsus4").play();
    document.querySelector("#sus4c_1").classList.add("play1");
    document.querySelector("#sus4c_2").classList.add("play1");
    document.querySelector("#sus4f").classList.add("play1");
    document.querySelector("#sus4g").classList.add("play1");
    document.querySelector("#sus4_1").classList.add("play1");
    document.querySelector("#sus4_2").classList.add("play1");
    document.querySelector("#sus4_3").classList.add("play1");
    document.querySelector("#sus4_4").classList.add("play1");
  };
};

document.querySelector("#audioCsus4").onpause = function() {
  document.querySelector("#csus4").classList.remove("active");
  document.querySelector("#csus4").innerHTML = "▶︎Csus4";
  document.querySelector("#sus4c_1").classList.remove("play1");
  document.querySelector("#sus4c_2").classList.remove("play1");
  document.querySelector("#sus4f").classList.remove("play1");
  document.querySelector("#sus4g").classList.remove("play1");
  document.querySelector("#sus4_1").classList.remove("play1");
  document.querySelector("#sus4_2").classList.remove("play1");
  document.querySelector("#sus4_3").classList.remove("play1");
  document.querySelector("#sus4_4").classList.remove("play1");
};

document.querySelector("#piano1").onclick = function() {
  this.classList.toggle("active");
  document.querySelector("#arrange1465").pause();
  document.querySelector("#arrange1").classList.remove("active");
  document.querySelector("#table1_1").classList.remove("active2");
  document.querySelector("#table1_2").classList.remove("active2");
  document.querySelector("#table1_3").classList.remove("active2");
  document.querySelector("#table1_4").classList.remove("active2");

  if (this.classList.contains("active")) {
    document.querySelector("#piano1465").currentTime = 0;
    document.querySelector("#piano1465").play();
    document.querySelector("#piano1").innerHTML = "■ピアノ";
    document.querySelector("#table1_1").classList.add("active");
    document.querySelector("#table1_2").classList.add("active");
    document.querySelector("#table1_3").classList.add("active");
    document.querySelector("#table1_4").classList.add("active");
  } else {
    document.querySelector("#piano1465").pause();
    document.querySelector("#piano1").innerHTML = "▶︎ピアノ";
    document.querySelector("#table1_1").classList.remove("active");
    document.querySelector("#table1_2").classList.remove("active");
    document.querySelector("#table1_3").classList.remove("active");
    document.querySelector("#table1_4").classList.remove("active");
  }
};
document.querySelector("#piano1465").addEventListener('ended', function() {
  document.querySelector("#piano1").classList.remove("active");
  document.querySelector("#piano1").innerHTML = "▶︎ピアノ";
  document.querySelector("#table1_1").classList.remove("active");
  document.querySelector("#table1_2").classList.remove("active");
  document.querySelector("#table1_3").classList.remove("active");
  document.querySelector("#table1_4").classList.remove("active");
});

document.querySelector("#arrange1").onclick = function() {
  this.classList.toggle("active");
  document.querySelector("#piano1465").pause();
  document.querySelector("#piano1").classList.remove("active");
  document.querySelector("#table1_1").classList.remove("active");
  document.querySelector("#table1_2").classList.remove("active");
  document.querySelector("#table1_3").classList.remove("active");
  document.querySelector("#table1_4").classList.remove("active");

  if (this.classList.contains("active")) {
    document.querySelector("#arrange1465").currentTime = 0;
    document.querySelector("#arrange1465").play();
    document.querySelector("#arrange1").innerHTML = "■アレンジ";
    document.querySelector("#table1_1").classList.add("active2");
    document.querySelector("#table1_2").classList.add("active2");
    document.querySelector("#table1_3").classList.add("active2");
    document.querySelector("#table1_4").classList.add("active2");
  } else {
    document.querySelector("#arrange1465").pause();
    document.querySelector("#arrange1").innerHTML = "▶︎アレンジ";
    document.querySelector("#table1_1").classList.remove("active2");
    document.querySelector("#table1_2").classList.remove("active2");
    document.querySelector("#table1_3").classList.remove("active2");
    document.querySelector("#table1_4").classList.remove("active2");
  }
};
document.querySelector("#arrange1465").addEventListener('ended', function() {
  document.querySelector("#arrange1").classList.remove("active");
  document.querySelector("#arrange1").innerHTML = "▶︎アレンジ";
  document.querySelector("#table1_1").classList.remove("active2");
  document.querySelector("#table1_2").classList.remove("active2");
  document.querySelector("#table1_3").classList.remove("active2");
  document.querySelector("#table1_4").classList.remove("active2");
});


document.querySelector("#piano2").onclick = function() {
  this.classList.toggle("active");
  document.querySelector("#arrangeAnimeSong").pause();
  document.querySelector("#arrange2").innerHTML = "▶︎アレンジ";
  document.querySelector("#arrange2").classList.remove("active");
  document.querySelector("#table2_1").classList.remove("active2");
  document.querySelector("#table2_2").classList.remove("active2");
  document.querySelector("#table2_3").classList.remove("active2");
  document.querySelector("#table2_4").classList.remove("active2");
  document.querySelector("#table2_5").classList.remove("active2");
  document.querySelector("#table2_6").classList.remove("active2");
  document.querySelector("#table2_7").classList.remove("active2");
  document.querySelector("#table2_8").classList.remove("active2");
  document.querySelector("#table2_9").classList.remove("active2");
  if (this.classList.contains("active")) {
    document.querySelector("#pianoAnimeSong").currentTime = 0;
    document.querySelector("#pianoAnimeSong").play();
    document.querySelector("#piano2").innerHTML = "■ピアノ";
    document.querySelector("#table2_1").classList.add("active");
    document.querySelector("#table2_2").classList.add("active");
    document.querySelector("#table2_3").classList.add("active");
    document.querySelector("#table2_4").classList.add("active");
    document.querySelector("#table2_5").classList.add("active");
    document.querySelector("#table2_6").classList.add("active");
    document.querySelector("#table2_7").classList.add("active");
    document.querySelector("#table2_8").classList.add("active");
    document.querySelector("#table2_9").classList.add("active");
  } else {
    document.querySelector("#pianoAnimeSong").pause();
    document.querySelector("#piano2").innerHTML = "▶︎ピアノ";
    document.querySelector("#table2_1").classList.remove("active");
    document.querySelector("#table2_2").classList.remove("active");
    document.querySelector("#table2_3").classList.remove("active");
    document.querySelector("#table2_4").classList.remove("active");
    document.querySelector("#table2_5").classList.remove("active");
    document.querySelector("#table2_6").classList.remove("active");
    document.querySelector("#table2_7").classList.remove("active");
    document.querySelector("#table2_8").classList.remove("active");
    document.querySelector("#table2_9").classList.remove("active");
  }
};
document.querySelector("#pianoAnimeSong").addEventListener('ended', function() {
  document.querySelector("#piano2").classList.remove("active");
  document.querySelector("#piano2").innerHTML = "▶︎ピアノ";
  document.querySelector("#table2_1").classList.remove("active");
  document.querySelector("#table2_2").classList.remove("active");
  document.querySelector("#table2_3").classList.remove("active");
  document.querySelector("#table2_4").classList.remove("active");
  document.querySelector("#table2_5").classList.remove("active");
  document.querySelector("#table2_6").classList.remove("active");
  document.querySelector("#table2_7").classList.remove("active");
  document.querySelector("#table2_8").classList.remove("active");
  document.querySelector("#table2_9").classList.remove("active");
});

document.querySelector("#arrange2").onclick = function() {
  this.classList.toggle("active");
  document.querySelector("#pianoAnimeSong").pause();
  document.querySelector("#piano2").innerHTML = "▶︎ピアノ";
  document.querySelector("#piano2").classList.remove("active");
  document.querySelector("#table2_1").classList.remove("active");
  document.querySelector("#table2_2").classList.remove("active");
  document.querySelector("#table2_3").classList.remove("active");
  document.querySelector("#table2_4").classList.remove("active");
  document.querySelector("#table2_5").classList.remove("active");
  document.querySelector("#table2_6").classList.remove("active");
  document.querySelector("#table2_7").classList.remove("active");
  document.querySelector("#table2_8").classList.remove("active");
  document.querySelector("#table2_9").classList.remove("active");
  if (this.classList.contains("active")) {
    document.querySelector("#arrangeAnimeSong").currentTime = 0;
    document.querySelector("#arrangeAnimeSong").play();
    document.querySelector("#arrange2").innerHTML = "■アレンジ";
    document.querySelector("#table2_1").classList.add("active2");
    document.querySelector("#table2_2").classList.add("active2");
    document.querySelector("#table2_3").classList.add("active2");
    document.querySelector("#table2_4").classList.add("active2");
    document.querySelector("#table2_5").classList.add("active2");
    document.querySelector("#table2_6").classList.add("active2");
    document.querySelector("#table2_7").classList.add("active2");
    document.querySelector("#table2_8").classList.add("active2");
    document.querySelector("#table2_9").classList.add("active2");
  } else {
    document.querySelector("#arrangeAnimeSong").pause();
    document.querySelector("#arrange2").innerHTML = "▶︎アレンジ";
    document.querySelector("#table2_1").classList.remove("active2");
    document.querySelector("#table2_2").classList.remove("active2");
    document.querySelector("#table2_3").classList.remove("active2");
    document.querySelector("#table2_4").classList.remove("active2");
    document.querySelector("#table2_5").classList.remove("active2");
    document.querySelector("#table2_6").classList.remove("active2");
    document.querySelector("#table2_7").classList.remove("active2");
    document.querySelector("#table2_8").classList.remove("active2");
    document.querySelector("#table2_9").classList.remove("active2");
  }
};
document.querySelector("#arrangeAnimeSong").addEventListener('ended', function() {
  document.querySelector("#arrange2").classList.remove("active");
  document.querySelector("#arrange2").innerHTML = "▶︎アレンジ";
  document.querySelector("#table2_1").classList.remove("active2");
  document.querySelector("#table2_2").classList.remove("active2");
  document.querySelector("#table2_3").classList.remove("active2");
  document.querySelector("#table2_4").classList.remove("active2");
  document.querySelector("#table2_5").classList.remove("active2");
  document.querySelector("#table2_6").classList.remove("active2");
  document.querySelector("#table2_7").classList.remove("active2");
  document.querySelector("#table2_8").classList.remove("active2");
  document.querySelector("#table2_9").classList.remove("active2");
});

document.querySelector("#box1_1").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
  } else {
    this.classList.add("active");
  }
};

document.querySelector("#box2_1").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
  } else {
    this.classList.add("active");
    document.querySelector("#box2_2").classList.remove("active");
    document.querySelector("#box2_3").classList.remove("active");
  }
};

document.querySelector("#box2_2").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
  } else {
    this.classList.add("active");
    document.querySelector("#box2_1").classList.remove("active");
    document.querySelector("#box2_3").classList.remove("active");
  }
};

document.querySelector("#box2_3").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
  } else {
    this.classList.add("active");
    document.querySelector("#box2_1").classList.remove("active");
    document.querySelector("#box2_2").classList.remove("active");
  }
};

document.querySelector("#box3_1").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
  } else {
    this.classList.add("active");
  }
};

document.querySelector("#play01").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    this.textContent = "▶︎再生";

    document.querySelector('#audio0_1_0').pause();
    document.querySelector('#audio0_2_0').pause();
    document.querySelector('#audio0_3_0').pause();

    document.querySelector('#audio0_1_1').pause();
    document.querySelector('#audio0_2_1').pause();
    document.querySelector('#audio0_3_1').pause();

    document.querySelector('#audio1_1_0').pause();
    document.querySelector('#audio1_2_0').pause();
    document.querySelector('#audio1_3_0').pause();

    document.querySelector('#audio1_1_1').pause();
    document.querySelector('#audio1_2_1').pause();
    document.querySelector('#audio1_3_1').pause();



    document.querySelector('#audio0_1_0').currentTime = 0;
    document.querySelector('#audio0_2_0').currentTime = 0;
    document.querySelector('#audio0_3_0').currentTime = 0;

    document.querySelector('#audio0_1_1').currentTime = 0;
    document.querySelector('#audio0_2_1').currentTime = 0;
    document.querySelector('#audio0_3_1').currentTime = 0;

    document.querySelector('#audio1_1_0').currentTime = 0;
    document.querySelector('#audio1_2_0').currentTime = 0;
    document.querySelector('#audio1_3_0').currentTime = 0;

    document.querySelector('#audio1_1_1').currentTime = 0;
    document.querySelector('#audio1_2_1').currentTime = 0;
    document.querySelector('#audio1_3_1').currentTime = 0;


    document.querySelector("#box1_1").classList.remove("play");

    document.querySelector("#box3_1").classList.remove("play");

    document.querySelector("#box2_1").classList.remove("play");
    document.querySelector("#box2_2").classList.remove("play");
    document.querySelector("#box2_3").classList.remove("play");
  } //if
  else {
    this.classList.add("active");
    this.textContent = "■停止";

    if (document.querySelector("#box1_1").classList.contains("active")) {
      if (document.querySelector("#box3_1").classList.contains("active")) {
        if (document.querySelector("#box2_1").classList.contains("active")) {
          document.querySelector("#audio1_1_1").play();
          document.querySelector("#box1_1").classList.add("play");
          document.querySelector("#box3_1").classList.add("play");
          document.querySelector("#box2_1").classList.add("play");
        } else {};
      } else {
        if (document.querySelector("#box2_1").classList.contains("active")) {
          document.querySelector("#audio1_1_0").play();
          document.querySelector("#box1_1").classList.add("play");
          document.querySelector("#box2_1").classList.add("play");
        } else {};
      };
    } else {
      if (document.querySelector("#box3_1").classList.contains("active")) {
        if (document.querySelector("#box2_1").classList.contains("active")) {
          document.querySelector("#audio0_1_1").play();
          document.querySelector("#box3_1").classList.add("play");
          document.querySelector("#box2_1").classList.add("play");
        } else {};
      } else {
        if (document.querySelector("#box2_1").classList.contains("active")) {
          document.querySelector("#audio0_1_0").play();
          document.querySelector("#box2_1").classList.add("play");
        } else {};
      };
    };

    if (document.querySelector("#box1_1").classList.contains("active")) {
      if (document.querySelector("#box3_1").classList.contains("active")) {
        if (document.querySelector("#box2_2").classList.contains("active")) {
          document.querySelector("#audio1_2_1").play();
          document.querySelector("#box1_1").classList.add("play");
          document.querySelector("#box3_1").classList.add("play");
          document.querySelector("#box2_2").classList.add("play");
        } else {};
      } else {
        if (document.querySelector("#box2_2").classList.contains("active")) {
          document.querySelector("#audio1_2_0").play();
          document.querySelector("#box1_1").classList.add("play");
          document.querySelector("#box2_2").classList.add("play");
        } else {};
      };
    } else {
      if (document.querySelector("#box3_1").classList.contains("active")) {
        if (document.querySelector("#box2_2").classList.contains("active")) {
          document.querySelector("#audio0_2_1").play();
          document.querySelector("#box3_1").classList.add("play");
          document.querySelector("#box2_2").classList.add("play");
        } else {};
      } else {
        if (document.querySelector("#box2_2").classList.contains("active")) {
          document.querySelector("#audio0_2_0").play();
          document.querySelector("#box2_2").classList.add("play");
        } else {};
      };
    };

    if (document.querySelector("#box1_1").classList.contains("active")) {
      if (document.querySelector("#box3_1").classList.contains("active")) {
        if (document.querySelector("#box2_3").classList.contains("active")) {
          document.querySelector("#audio1_3_1").play();
          document.querySelector("#box1_1").classList.add("play");
          document.querySelector("#box3_1").classList.add("play");
          document.querySelector("#box2_3").classList.add("play");
        } else {};
      } else {
        if (document.querySelector("#box2_3").classList.contains("active")) {
          document.querySelector("#audio1_3_0").play();
          document.querySelector("#box1_1").classList.add("play");
          document.querySelector("#box2_3").classList.add("play");
        } else {};
      };
    } else {
      if (document.querySelector("#box3_1").classList.contains("active")) {
        if (document.querySelector("#box2_3").classList.contains("active")) {
          document.querySelector("#audio0_3_1").play();
          document.querySelector("#box3_1").classList.add("play");
          document.querySelector("#box2_3").classList.add("play");
        } else {};
      } else {
        if (document.querySelector("#box2_3").classList.contains("active")) {
          document.querySelector("#audio0_3_0").play();
          document.querySelector("#box2_3").classList.add("play");
        } else {};
      };
    };
  } //if
};

const play01 = document.querySelector("#play01");
document.querySelector("#audio0_1_0").addEventListener('ended', function() {
  play01.classList.remove("active");
  play01.innerHTML = "▶︎再生";
  document.querySelector("#box2_1").classList.remove("play");
});

document.querySelector("#audio0_2_0").addEventListener('ended', function() {
  play01.classList.remove("active");
  play01.innerHTML = "▶︎再生";
  document.querySelector("#box2_2").classList.remove("play");
});

document.querySelector("#audio0_3_0").addEventListener('ended', function() {
  play01.classList.remove("active");
  play01.innerHTML = "▶︎再生";
  document.querySelector("#box2_3").classList.remove("play");
});

document.querySelector("#audio0_1_1").addEventListener('ended', function() {
  play01.classList.remove("active");
  play01.innerHTML = "▶︎再生";
  document.querySelector("#box2_1").classList.remove("play");
  document.querySelector("#box3_1").classList.remove("play");
});

document.querySelector("#audio0_2_1").addEventListener('ended', function() {
  play01.classList.remove("active");
  play01.innerHTML = "▶︎再生";
  document.querySelector("#box2_2").classList.remove("play");
  document.querySelector("#box3_1").classList.remove("play");
});

document.querySelector("#audio0_3_1").addEventListener('ended', function() {
  play01.classList.remove("active");
  play01.innerHTML = "▶︎再生";
  document.querySelector("#box2_3").classList.remove("play");
  document.querySelector("#box3_1").classList.remove("play");
});

document.querySelector("#audio1_1_0").addEventListener('ended', function() {
  play01.classList.remove("active");
  play01.innerHTML = "▶︎再生";
  document.querySelector("#box1_1").classList.remove("play");
  document.querySelector("#box2_1").classList.remove("play");
});

document.querySelector("#audio1_2_0").addEventListener('ended', function() {
  play01.classList.remove("active");
  play01.innerHTML = "▶︎再生";
  document.querySelector("#box1_1").classList.remove("play");
  document.querySelector("#box2_2").classList.remove("play");
});

document.querySelector("#audio1_3_0").addEventListener('ended', function() {
  play01.classList.remove("active");
  play01.innerHTML = "▶︎再生";
  document.querySelector("#box1_1").classList.remove("play");
  document.querySelector("#box2_3").classList.remove("play");
});

document.querySelector("#audio1_1_1").addEventListener('ended', function() {
  play01.classList.remove("active");
  play01.innerHTML = "▶︎再生";
  document.querySelector("#box1_1").classList.remove("play");
  document.querySelector("#box2_1").classList.remove("play");
  document.querySelector("#box3_1").classList.remove("play");
});

document.querySelector("#audio1_2_1").addEventListener('ended', function() {
  play01.classList.remove("active");
  play01.innerHTML = "▶︎再生";
  document.querySelector("#box1_1").classList.remove("play");
  document.querySelector("#box2_2").classList.remove("play");
  document.querySelector("#box3_1").classList.remove("play");
});

document.querySelector("#audio1_3_1").addEventListener('ended', function() {
  play01.classList.remove("active");
  play01.innerHTML = "▶︎再生";
  document.querySelector("#box1_1").classList.remove("play");
  document.querySelector("#box2_3").classList.remove("play");
  document.querySelector("#box3_1").classList.remove("play");
});
