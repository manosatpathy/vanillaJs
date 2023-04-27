const colors = ["red", "green", "blue", "yellow"];
const button = document.getElementById("btn");
const body = document.querySelector("main");
const colorName = document.getElementById("color");

button.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randomNumber];
  colorName.innerText = colors[randomNumber];
});
