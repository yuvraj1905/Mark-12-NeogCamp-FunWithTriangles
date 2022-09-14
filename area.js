const base = document.querySelector("#base");
const height = document.querySelector("#height");
const btn = document.querySelector("#cal-btn");
const output = document.querySelector("#output");

function calcArea() {
  if (base.value === "" || height.value === "") {
    alert("Please enter valid values for both inputs ");
    return;
  }

  var ans = (1 / 2) * (base.value * height.value);
  output.innerText = `Area will be ${ans}`;
}

btn.addEventListener("click", calcArea);
