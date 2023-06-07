let pic = document.getElementById("pic");
let container = document.querySelector(".container");

function phones(phone) {
  pic.src = phone;
}

function colors(color) {
  container.style.background = color;
}
