

// Screens
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');

// Buttons
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

// Quiz elements
const questionStatement = document.getElementById('question-statement');
const questionNumber = document.getElementById('question-number');
const totalQuestion = document.getElementById('total-question');
const currentScore = document.getElementById('current-score');
const answerChoices = document.getElementById('answer-choices');
const currentProgress = document.getElementById('current-progress');

// End screen elements
const endScore = document.getElementById('end-score');
const endTotalScore = document.getElementById('end-total-score');
const message = document.getElementById('message');

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the smallest prime number?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "Which country is famous for the maple leaf?",
    answers: [
      { text: "Canada", correct: true },
      { text: "USA", correct: false },
      { text: "UK", correct: false },
      { text: "Australia", correct: false },
    ],
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "Which element has the atomic number 1?",
    answers: [
      { text: "Hydrogen", correct: true },
      { text: "Helium", correct: false },
      { text: "Oxygen", correct: false },
      { text: "Carbon", correct: false },
    ],
  },
  {
    question: "What is the square root of 144?",
    answers: [
      { text: "10", correct: false },
      { text: "11", correct: false },
      { text: "12", correct: true },
      { text: "13", correct: false },
    ],
  },
  {
    question: "Which country hosted the 2020 Summer Olympics?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "Brazil", correct: false },
      { text: "Russia", correct: false },
    ],
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Marie Curie", correct: false },
    ],
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon River", correct: false },
      { text: "Yangtze River", correct: false },
      { text: "Nile River", correct: true },
      { text: "Mississippi River", correct: false },
    ],
  },
  {
    question: "Which instrument has keys, pedals, and strings?",
    answers: [
      { text: "Guitar", correct: false },
      { text: "Piano", correct: true },
      { text: "Violin", correct: false },
      { text: "Flute", correct: false },
    ],
  },
];
let count = 5;
let current_question_idx = 0;
let answersDisabled = false;
var score = 0;

startBtn.addEventListener("click",startQuiz);

function startQuiz(){
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion();

}
function showQuestion(){
    const currentQuestion = quizQuestions[current_question_idx];
    questionStatement.innerText = currentQuestion.question;
    questionNumber.innerText = current_question_idx+1;
    totalQuestion.innerText = count;
    currentScore.innerText = score;
    answerChoices.innerText = "";
    currentProgress.style.width = ((current_question_idx+1)/5)*100 + "%";
    //show Button
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
         // Optional: for styling
        
        button.dataset.correct = answer.correct; // Store whether it's the correct answer
        button.addEventListener("click", selectAnswer);
        answerChoices.appendChild(button);
    
});
}

function selectAnswer(event){
    if(answersDisabled) return;
    answersDisabled = true;
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true"

    // Array.from(answerChoices.children).forEach(button=>{
    //     if(button.dataset.correct === "true")
    //         button.classList.add("correct");
    //     else if(button === selectedButton) button.classList.add("incorrect");
    // });
    if(isCorrect){ score++;
    currentScore.textContent = score;
    }
    current_question_idx++;
    answersDisabled = false;
    if(current_question_idx<5) showQuestion();
    else showResult();

}
function showResult(){
  endScreen.classList.add("active");
  quizScreen.classList.remove("active");
  endScore.innerText = score;
  restartBtn.addEventListener("click",restartQuiz);
}
function restartQuiz(){
  score = 0;
  current_question_idx = 0;
  endScreen.classList.remove("active");
  startQuiz();
}