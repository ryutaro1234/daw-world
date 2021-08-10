function nav_toggle(){
  document.getElementById("nav_toggle").classList.toggle("nav_toggle");
  document.getElementById("navigation").classList.toggle("navigation");
  document.getElementById("nav").classList.toggle("nav");
};

let scrollup = document.getElementsByClassName('scroll-up');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrollup.length; i++){
    const rect = scrollup[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollup[i].classList.add('active');
    }
  }
});
window.addEventListener("load", () => {
  for (let i = 0; i < scrollup.length; i++){
    const rect = scrollup[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollup[i].classList.add('active');
    }
  }
});

let scrollupl = document.getElementsByClassName('scroll-up-l');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrollupl.length; i++){
    const rect = scrollupl[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollupl[i].classList.add('active');
    }
  }
});
window.addEventListener("load", () => {
  for (let i = 0; i < scrollupl.length; i++){
    const rect = scrollupl[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollupl[i].classList.add('active');
    }
  }
});

let scrollupr = document.getElementsByClassName('scroll-up-r');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrollupr.length; i++){
    const rect = scrollupr[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollupr[i].classList.add('active');
    }
  }
});
window.addEventListener("load", () => {
  for (let i = 0; i < scrollupr.length; i++){
    const rect = scrollupr[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollupr[i].classList.add('active');
    }
  }
});

let scrolldown = document.getElementsByClassName('scroll-down');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrolldown.length; i++){
    const rect = scrolldown[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrolldown[i].classList.add('active');
    }
  }
});
window.addEventListener("load", () => {
  for (let i = 0; i < scrolldown.length; i++){
    const rect = scrolldown[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrolldown[i].classList.add('active');
    }
  }
});

let scrolldownl = document.getElementsByClassName('scroll-down-l');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrolldownl.length; i++){
    const rect = scrolldownl[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrolldownl[i].classList.add('active');
    }
  }
});
window.addEventListener("load", () => {
  for (let i = 0; i < scrolldownl.length; i++){
    const rect = scrolldownl[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrolldownl[i].classList.add('active');
    }
  }
});

let scrolldownr = document.getElementsByClassName('scroll-down-r');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrolldownr.length; i++){
    const rect = scrolldownr[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrolldownr[i].classList.add('active');
    }
  }
});
window.addEventListener("load", () => {
  for (let i = 0; i < scrolldownr.length; i++){
    const rect = scrolldownr[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrolldownr[i].classList.add('active');
    }
  }
});

let scrollslidel = document.getElementsByClassName('scroll-slide-l');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrollslidel.length; i++){
    const rect = scrollslidel[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollslidel[i].classList.add('active');
    }
  }
});
window.addEventListener("load", () => {
  for (let i = 0; i < scrollslidel.length; i++){
    const rect = scrollslidel[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollslidel[i].classList.add('active');
    }
  }
});

let scrollslider = document.getElementsByClassName('scroll-slide-r');
window.addEventListener("scroll", () => {
  for (let i = 0; i < scrollslider.length; i++){
    const rect = scrollslider[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollslider[i].classList.add('active');
    }
  }
});
window.addEventListener("load", () => {
  for (let i = 0; i < scrollslider.length; i++){
    const rect = scrollslider[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      scrollslider[i].classList.add('active');
    }
  }
});
