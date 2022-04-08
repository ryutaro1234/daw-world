document.querySelector("#box1_1").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
  }
  else {
    this.classList.add("active");
  }
};

document.querySelector("#box2_1").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
  }
  else {
    this.classList.add("active");
    document.querySelector("#box2_2").classList.remove("active");
  }
};
document.querySelector("#box2_2").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
  }
  else {
    this.classList.add("active");
    document.querySelector("#box2_1").classList.remove("active");
  }
};

document.querySelector("#box3_1").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
  }
  else {
    this.classList.add("active");
    document.querySelector("#box3_2").classList.remove("active");
  }
};
document.querySelector("#box3_2").onclick = function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active")
  }
  else {
    this.classList.add("active");
    document.querySelector("#box3_1").classList.remove("active");
  }
};

document.querySelector("#play01").onclick = function() {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      this.textContent = "▶︎再生";

      document.querySelector('#audio0_0_1').pause();
      document.querySelector('#audio0_0_2').pause();
      document.querySelector('#audio0_1_0').pause();
      document.querySelector('#audio0_1_1').pause();
      document.querySelector('#audio0_1_2').pause();

      document.querySelector('#audio0_2_0').pause();
      document.querySelector('#audio0_2_1').pause();
      document.querySelector('#audio0_2_2').pause();

      document.querySelector('#audio1_0_0').pause();
      document.querySelector('#audio1_0_1').pause();
      document.querySelector('#audio1_0_2').pause();
      document.querySelector('#audio1_1_0').pause();
      document.querySelector('#audio1_1_1').pause();
      document.querySelector('#audio1_1_2').pause();

      document.querySelector('#audio1_2_0').pause();
      document.querySelector('#audio1_2_1').pause();
      document.querySelector('#audio1_2_2').pause();


      document.querySelector('#audio0_0_1').currentTime = 0;
      document.querySelector('#audio0_0_2').currentTime = 0;
      document.querySelector('#audio0_1_0').currentTime = 0;
      document.querySelector('#audio0_1_1').currentTime = 0;
      document.querySelector('#audio0_1_2').currentTime = 0;

      document.querySelector('#audio0_2_0').currentTime = 0;
      document.querySelector('#audio0_2_1').currentTime = 0;
      document.querySelector('#audio0_2_2').currentTime = 0;

      document.querySelector('#audio1_0_0').currentTime = 0;
      document.querySelector('#audio1_0_1').currentTime = 0;
      document.querySelector('#audio1_0_2').currentTime = 0;
      document.querySelector('#audio1_1_0').currentTime = 0;
      document.querySelector('#audio1_1_1').currentTime = 0;
      document.querySelector('#audio1_1_2').currentTime = 0;

      document.querySelector('#audio1_2_0').currentTime = 0;
      document.querySelector('#audio1_2_1').currentTime = 0;
      document.querySelector('#audio1_2_2').currentTime = 0;


      document.querySelector("#box1_1").classList.remove("play");

      document.querySelector("#box2_1").classList.remove("play");
      document.querySelector("#box2_2").classList.remove("play");

      document.querySelector("#box3_1").classList.remove("play");
      document.querySelector("#box3_2").classList.remove("play");
    }//if

    else {
      this.classList.add("active");
      this.textContent = "■停止";

      if (document.querySelector("#box1_1").classList.contains("active")) {
        if (document.querySelector("#box2_1").classList.contains("active")) {
          if (document.querySelector("#box3_1").classList.contains("active")) {
            document.querySelector("#audio1_1_1").play();
            document.querySelector("#box1_1").classList.add("play");
            document.querySelector("#box2_1").classList.add("play");
            document.querySelector("#box3_1").classList.add("play");
          }else {
            if (document.querySelector("#box3_2").hasClass("active")) {
              document.querySelector("#audio1_1_2").play();
              document.querySelector("#box1_1").classList.add("play");
              document.querySelector("#box2_1").classList.add("play");
              document.querySelector("#box3_2").classList.add("play");
            }else {
              document.querySelector("#audio1_1_0").play();
              document.querySelector("#box1_1").classList.add("play");
              document.querySelector("#box2_1").classList.add("play");
            };
          };
        }else {
          if (document.querySelector("#box2_2").classList.contains("active")) {
            if (document.querySelector("#box3_1").classList.contains("active")) {
              document.querySelector("#audio1_2_1").play();
              document.querySelector("#box1_1").classList.add("play");
              document.querySelector("#box2_2").classList.add("play");
              document.querySelector("#box3_1").classList.add("play");
            }else {
              if (document.querySelector("#box3_2").classList.contains("active")) {
                document.querySelector("#audio1_2_2").play();
                document.querySelector("#box1_1").classList.add("play");
                document.querySelector("#box2_2").classList.add("play");
                document.querySelector("#box3_2").classList.add("play");
              }else {
                document.querySelector("#audio1_2_0").play();
                document.querySelector("#box1_1").classList.add("play");
                document.querySelector("#box2_2").classList.add("play");
              };
            };
          }else {
            if (document.querySelector("#box3_1").classList.contains("active")) {
              document.querySelector("#audio1_0_1").play();
              document.querySelector("#box1_1").classList.add("play");
              document.querySelector("#box3_1").classList.add("play");
            }else {
              if (document.querySelector("#box3_2").classList.contains("active")) {
                document.querySelector("#audio1_0_2").play();
                document.querySelector("#box1_1").classList.add("play");
                document.querySelector("#box3_2").classList.add("play");
              }else {
                document.querySelector("#audio1_0_0").play();
                document.querySelector("#box1_1").classList.add("play");
              };
            };
          };
        };
      }else {
        if (document.querySelector("#box2_1").classList.contains("active")) {
          if (document.querySelector("#box3_1").classList.contains("active")) {
            document.querySelector("#audio0_1_1").play()
            document.querySelector("#box2_1").classList.add("play");
            document.querySelector("#box3_1").classList.add("play");
          }else {
            if (document.querySelector("#box3_2").classList.contains("active")) {
              document.querySelector("#audio0_1_2").play();
              document.querySelector("#box2_1").classList.add("play");
              document.querySelector("#box3_2").classList.add("play");
            }else {
              document.querySelector("#audio0_1_0").play();
              document.querySelector("#box2_1").classList.add("play");
            };
          };
        }else {
          if (document.querySelector("#box2_2").classList.contains("active")) {
            if (document.querySelector("#box3_1").classList.contains("active")) {
              document.querySelector("#audio0_2_1").play();
              document.querySelector("#box2_2").classList.add("play");
              document.querySelector("#box3_1").classList.add("play");
            }else {
              if (document.querySelector("#box3_2").classList.contains("active")) {
                document.querySelector("#audio0_2_2").play();
                document.querySelector("#box2_2").classList.add("play");
                document.querySelector("#box3_2").classList.add("play");
              }else {
                document.querySelector("#audio0_2_0").play();
                document.querySelector("#box2_2").classList.add("play");
              };
            };
          }else {
            if (document.querySelector("#box3_1").classList.contains("active")) {
              document.querySelector("#audio0_0_1").play();
              document.querySelector("#box3_1").classList.add("play");
            }else {
              if (document.querySelector("#box3_2").classList.contains("active")) {
                document.querySelector("#audio0_0_2").play();
                document.querySelector("#box3_2").classList.add("play");
              }else {};
            };
          };
        };
      };
    }//if
  };

const play01 = document.querySelector("#play01");
document.querySelector("#audio0_0_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box3_1").classList.remove("play");
});

document.querySelector("#audio0_0_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box3_2").classList.remove("play");
});

document.querySelector("#audio0_1_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box2_1").classList.remove("play");
});

document.querySelector("#audio0_1_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box2_1").classList.remove("play");
    document.querySelector("#box3_1").classList.remove("play");
});

document.querySelector("#audio0_1_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box2_1").classList.remove("play");
    document.querySelector("#box3_2").classList.remove("play");
});

document.querySelector("#audio0_2_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box2_2").classList.remove("play");
    document.querySelector("#box3_1").classList.remove("play");
});

document.querySelector("#audio0_2_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box2_2").classList.remove("play");
    document.querySelector("#box3_2").classList.remove("play");
});

document.querySelector("#audio1_0_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box1_1").classList.remove("play");
});

document.querySelector("#audio1_0_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box1_1").classList.remove("play");
    document.querySelector("#box3_1").classList.remove("play");
});

document.querySelector("#audio1_0_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box1_1").classList.remove("play");
    document.querySelector("#box3_2").classList.remove("play");
});

document.querySelector("#audio1_1_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box1_1").classList.remove("play");
    document.querySelector("#box2_1").classList.remove("play");
});

document.querySelector("#audio1_1_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box1_1").classList.remove("play");
    document.querySelector("#box2_1").classList.remove("play");
    document.querySelector("#box3_1").classList.remove("play");
});

document.querySelector("#audio1_1_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box1_1").classList.remove("play");
    document.querySelector("#box2_1").classList.remove("play");
    document.querySelector("#box3_2").classList.remove("play");
});

document.querySelector("#audio1_2_0").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box1_1").classList.remove("play");
    document.querySelector("#box2_2").classList.remove("play");
});

document.querySelector("#audio1_2_1").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box1_1").classList.remove("play");
    document.querySelector("#box2_2").classList.remove("play");
    document.querySelector("#box3_1").classList.remove("play");
});

document.querySelector("#audio1_2_2").addEventListener('ended', function() {
    play01.classList.remove("active");
    play01.innerHTML = "▶︎再生";
    document.querySelector("#box1_1").classList.remove("play");
    document.querySelector("#box2_2").classList.remove("play");
    document.querySelector("#box3_2").classList.remove("play");
});
