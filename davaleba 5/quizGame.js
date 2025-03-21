let score = 0;

let showQuestion = (question, answers, correctAnswer) => {
  const questionElement = document.getElementById('question');
  questionElement.textContent = question;

  const answerElements = document.querySelectorAll('.answer')
  answerElements.forEach((element, index) => {
    element.textContent = answers[index];
    element.classList.remove('correct', 'incorrect')
  });
}

let checkAnswer = selectedElement => {
  const answerElements = document.querySelectorAll('.answer');
  const selectedAnswer = Array.from(answerElements).indexOf(selectedElement);

  if (selectedAnswer == correctAnswer){
    selectedElement.classList.add('correct')
    score++;
  }else{
    selectedElement.classList.add('incorrect');
  }
  updateScore();
}


let updateScore = () => {
  const scoreElement = document.getElementById('score')
  scoreElement.textContent = `Score: ${score}`;
}


const question = "In what country did the first Starbucks open outside of North America?"
const answers = ["Canada", "France", "Japan", "Italy"]
const correctAnswer = 2;

showQuestion(question, answers, correctAnswer)