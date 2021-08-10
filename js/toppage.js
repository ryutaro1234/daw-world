window.addEventListener("load", () => {
  document.getElementById("type01").classList.add("active");
});

window.addEventListener("load", () => {
  document.getElementById("bg01").classList.add("-visible");
});
var rellax = new Rellax('#bg01', {
  speed: -6,
});

window.addEventListener("load", () => {
  document.getElementById("bg02").classList.add("-visible");
});
var rellax = new Rellax('#bg02', {
  speed: -3,
});

window.addEventListener("load", () => {
  document.getElementById("title01").classList.add("-visible");
});

let mainimage = document.getElementById("main-image");
window.addEventListener("load", () => {
  mainimage.classList.add("active");
});

window.addEventListener("load", () => {
  document.getElementById("bg03").classList.add("-visible");
});
var rellax = new Rellax('#bg03', {
  speed: 5,
});

window.addEventListener("load", () => {
  document.getElementById("bg04").classList.add("-visible");
});
var rellax = new Rellax('#bg04', {
  speed: 2,
});

window.addEventListener("load", () => {
  document.getElementById("type02").classList.add("active");
});
