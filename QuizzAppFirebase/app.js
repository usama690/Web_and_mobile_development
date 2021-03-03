var db = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hyper Tool Markup Language",
    c: "Hyper Text Mark Language",
    d: "Hyper link Mark Language",
    b: "Hyper Text Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheet",
    c: "Cas Style Sheet",
    d: "Cas Strong Sheet",
    b: "Cascading Stylish Sheet",
    ans: "ans1",
  },
  {
    question: "Q3: What is the full form of HTTP?",
    a: "Hypertext Transfer Product",
    c: "Hypertext tool Protocol",
    d: "Hyperlink Transfer Protocol",
    b: "Hypertext Transfer Protocol",
    ans: "ans4",
  },
  {
    question: "Q4: What is the full form of JS?",
    a: "JavaScript",
    c: "JavaSuper",
    d: "JustScript",
    b: "JordenShoes",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = db[questionCount];
  question.innerHTML = db[questionCount].question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};
loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};
const delselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};
submit.addEventListener("click", () => {
  const checkAnswer = getCheckAnswer();
  if (checkAnswer === db[questionCount].ans) {
    score++;
  }
  questionCount++;

  delselectAll();
  if (questionCount < db.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `<h3> You Scored ${score}/ ${db.length} </h3>
    <button class = 'btn' onclick = "location.reload() "> Try Again </button>
    `;
    showScore.classList.remove("scoreArea");
  }
});
