const base = document.querySelector("#base");
const perpendicular = document.querySelector("#perpendicular");
const btn = document.querySelector("#cal-btn");
const output = document.querySelector("#output");

function calcHypotenuse() {
  var ans = Math.sqrt(
    Math.pow(Number(base.value), Number(2)) +
      Math.pow(Number(perpendicular.value), Number(2))
  );
  output.innerText = `Hypotenuse will be ${ans}`;
}

btn.addEventListener("click", calcHypotenuse);
