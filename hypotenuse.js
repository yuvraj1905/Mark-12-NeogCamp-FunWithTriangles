const base = document.querySelector("#base");
const perpendicular = document.querySelector("#perpendicular");
const btn = document.querySelector(".check-btn");
const output = document.querySelector("#output");

function calcHypotenuse() {
  if (base.value === "" || perpendicular.value === "") {
    alert("Please enter valid angles for both the 2 sides ");
    return;
  }
  var ans = Math.sqrt(
    Math.pow(Number(base.value), Number(2)) +
      Math.pow(Number(perpendicular.value), Number(2))
  );
  output.innerText = `Hypotenuse will be ${ans.toFixed(2)}`;
}

btn.addEventListener("click", calcHypotenuse);
