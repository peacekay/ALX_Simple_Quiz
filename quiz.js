const greetings = document.getElementById("welcome")
let correctAnswer = "4";
function checkAnswer() {
  let selectedOption = document.querySelector('input[name="quiz"]:checked');
  let feedbackElement = document.getElementById("feedback");

  if(!selectedOption) {
    feedbackElement.textContent = "please select an answer!"
  }

  let userAnswer = selectedOption.value;
  console.log(userAnswer)

  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "correct! well done.";
  } else {
    feedbackElement.textContent = "That's incorrect, Try again";
  }
  
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer)

