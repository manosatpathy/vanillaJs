let head = document.querySelector("h1");
let btns = document.querySelectorAll("button");
let value = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let style = e.currentTarget.classList;
    if (style == "decr") {
      value--;
    } else if (style == "incr") {
      value++;
    } else {
      value = 0;
    }

    head.innerHTML = value;
  });
});
