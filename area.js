const base = document.querySelector("#base");
const height = document.querySelector("#height");
const btn = document.querySelector(".check-btn");
const output = document.querySelector("#output");

function calcArea() {
  console.log("button clicked");
  if (base.value === "" || height.value === "") {
    alert("Please enter valid values for both inputs ");
    return;
  }

  var ans = (1 / 2) * (base.value * height.value);
  output.innerText = `Area will be ${ans}`;
}

btn.addEventListener("click", calcArea);
