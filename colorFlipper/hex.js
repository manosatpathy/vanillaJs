const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const button = document.getElementById("btn");
const body = document.querySelector("main");
const colorName = document.getElementById("color");

button.addEventListener("click", function () {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexColor[randomNumber()];
  }

  function randomNumber() {
    return Math.floor(Math.random() * hexColor.length);
  }

  colorName.innerText = hexCode;
  body.style.backgroundColor = hexCode;
});
