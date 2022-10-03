const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const checkBtn = document.querySelector(".check-btn");
const output = document.querySelector("#output");

function checkIsTriangle() {
  if (
    angleOne.value === "" ||
    angleThree.value === "" ||
    angleTwo.value === ""
  ) {
    alert("Please enter valid angles for all 3 sides ");
    return;
  }
  if (angleOne.value < 1 || angleTwo.value < 1 || angleThree.value < 1) {
    alert("Angle value can't be 0 or negative.");
    return;
  }

  const sum =
    Number(angleOne.value) + Number(angleThree.value) + Number(angleTwo.value);

  if (sum === 180) {
    output.innerText = "It is a triangle 👍";
    output.style.color = "#65a30d";
  } else {
    output.innerText = "It is NOT a triangle";
  }
}

checkBtn.addEventListener("click", checkIsTriangle);
