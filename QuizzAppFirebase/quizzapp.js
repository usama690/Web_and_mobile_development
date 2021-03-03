// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCxG43xqqHtTdVtM5qzu3_7judzFfPeIM8",
  authDomain: "quiz-application-a22b9.firebaseapp.com",
  databaseURL: "https://quiz-application-a22b9-default-rtdb.firebaseio.com",
  projectId: "quiz-application-a22b9",
  storageBucket: "quiz-application-a22b9.appspot.com",
  messagingSenderId: "442147716077",
  appId: "1:442147716077:web:d08b737317133104f4c5e4",
  measurementId: "G-ZENWHM4S35",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

dataRef = firebase.database().ref("/Quizz Application Data/");

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

function QuizzAppData() {
  let arr = [];
  let questionCount = 0;
  let score = 0;

  function loadQuestion() {
    dataRef.on("child_added", function getData(data) {
      a = data.val();
      arr.push(a);
      console.log(arr);
      const questionList = arr[questionCount];
      question.innerHTML = `Q${arr[questionCount].id}${arr[questionCount].question}`;
      option1.innerHTML = questionList.a;
      option2.innerHTML = questionList.b;
      option3.innerHTML = questionList.c;
      option4.innerHTML = questionList.d;
    });
  }
  loadQuestion();
  const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
      if (curAnsElem.checked) {
        answer = curAnsElem.value;
      }
    });
    return answer;
  };
  const delselectAll = () => {
    answers.forEach((curAnsElem) => (curAnsElem.checked = false));
  };
  submit.addEventListener("click", () => {
    const checkAnswer = getCheckAnswer();
    if (checkAnswer === arr[questionCount].ans) {
      score++;
    }
    questionCount++;

    delselectAll();
    if (questionCount < arr.length) {
      loadQuestion();
    } else {
      document.getElementById("submit").disabled = true;
      showScore.innerHTML = `<h3> You Scored ${score}/ ${arr.length} </h3>
      <button class = 'btn' onclick = "location.reload() "> Try Again </button>
      `;
      showScore.classList.remove("scoreArea");
    }
  });
}
QuizzAppData();
