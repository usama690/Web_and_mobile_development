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
document.getElementById("save_data").addEventListener("click", storeData);
function storeData(e) {
  e.preventDefault();
  let userId = document.getElementById("userId");
  let userid = document.querySelector("#userId").value;
  let quest_input = document.getElementById("quest_input").value;
  let option1_input = document.getElementById("option1_input").value;
  let option2_input = document.getElementById("option2_input").value;
  let option3_input = document.getElementById("option3_input").value;
  let option4_input = document.getElementById("option4_input").value;
  let answer_input = document.getElementById("answer_input").value;
  console.log(
    userid,
    quest_input,
    option1_input,
    option2_input,
    option3_input,
    option4_input,
    answer_input
  );
  saveInfo(
    userid,
    quest_input,
    option1_input,
    option2_input,
    option3_input,
    option4_input,
    answer_input
  );
  document.getElementsByTagName("input").value = "";
  console.log(document.getElementsByTagName("input"))
}
function saveInfo(
  userid,
  quest_input,
  option1_input,
  option2_input,
  option3_input,
  option4_input,
  answer_input
) {
  dataRef.child(userId.value).set({
    id: userid,
    question: quest_input,
    a: option1_input,
    c: option2_input,
    d: option3_input,
    b: option4_input,
    ans: answer_input,
  });
}
