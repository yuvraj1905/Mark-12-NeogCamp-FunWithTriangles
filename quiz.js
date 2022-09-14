const submit = document.querySelector("#submit");
const output = document.querySelector("#output");
const quizForm = document.querySelector(".quiz-form");

const answers = ["80°", "hypotenuse"];

function checkAnswer() {
  let score = 0;
  let index = 0;
  let size = 0;
  var userAns = new FormData(quizForm);

  for (let value of userAns.values()) {
    size++;
  }

  if (size < 2) {
    alert("Attempt all questions ");
    return;
  }

  for (let value of userAns.values()) {
    if (value === answers[index]) {
      score++;
    }
    index++;
  }
  output.innerText = `Your score is : ${score}`;
}

submit.addEventListener("click", checkAnswer);
