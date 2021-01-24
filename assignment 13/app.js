// ---------------CHANGING CASE----------------
// QUESTION NO 1
user_inp = prompt("enter the letter").toUpperCase();
alert(user_inp);

// QUESTION NO 2

function toTitleCase() {
  var title = document.getElementById("title");
  user_inp2 = prompt("enter the letters").toLowerCase().split(" ");
  for (var i = 0; i < user_inp2.length; i++) {
    user_inp2[i] = user_inp2[i].charAt(0).toUpperCase() + user_inp2[i].slice(1);
  }
  title.innerHTML = user_inp2.join(" ");
}
const result = toTitleCase();

// -----------------Strings: measuring length and extracting parts----------------------

// QUESTION NO 1

const mobile = prompt("enter your favourite mobile model");
var len = mobile.length;
alert(len);

// QUESTION NO 2

const char = prompt("enter the word");
alert(char.charAt(char.length - 1));

// -----------------Strings: finding segments----------------------

// QUESTION NO 1

var pak = "Pakistani";
alert(pak.indexOf("n"));

// QUESTION NO 2

const username = prompt("enter the username");
if (
  username === "@" ||
  username === "." ||
  username === "," ||
  username === "!"
) {
  alert("please enter a valid username");
} else {
  alert("correct");
}

// QEUSTION NO 3
const str = "The quick brown fox jumps over the lazy dog."
  .toLowerCase()
  .split(" ");
const findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) !== index);
const duplicates = findDuplicates(str);
alert(duplicates);

// -----------------------------Strings: finding a character at a location-----------------------
// QUESTION NO 1
var sentence = "Pakistani";
alert(sentence.charAt("3"));

// -----------------------------Strings: replacing characters-----------------------

// QUESTION NO 1

var rep1 = "Hyderabad".replace("Hyder", "Islam");
alert(rep1);

// QUESTION NO 2

var message = "Ali and Sami are best friends. They play cricket and football together.".replaceAll(
  "and",
  "with"
);
alert(message);

// -----------------------------Rounding numbers-----------------------
// question no 1
var num1 = +prompt("enter the positive number");
var round = Math.round(num1);
var ceil = Math.ceil(num1);
var floor = Math.floor(num1);
if (num1 >= 0) {
  alert(round);
  alert(ceil);
  alert(floor);
}
// question no 2
var num2 = +prompt("enter the negative number");
var round = Math.round(num1);
var ceil = Math.ceil(num1);
var floor = Math.floor(num1);
if (num1 <= 0) {
  alert(round);
  alert(ceil);
  alert(floor);
}

// -----------------------------Generating random numbers-----------------------

// question no 1

var dice = Math.random();
alert(dice);

// question  no 2

var toss = dice + 1;
if (Math.round(toss) === 2) {
  alert("Heads");
} else if (Math.round(toss) === 1) {
  alert("Tails");
}

// question  no 3

var random = Math.random() * 10;
var num3 = +prompt("enter a number between 1 to 10");
if (num3 === Math.round(random)) {
  alert("congratulate");
} else {
  alert("please try next time");
}

// ------------------------------------Converting strings to integers and decimals---------------------

// QUESTION NO 1

var weight = prompt("please enter the weight");
alert(parseFloat(weight) + " kgs");

// ------------------------------------Converting strings to numbers, numbers to strings---------------------

// QUESTION NO 1

var convert = "472";
var convert2 = parseInt(convert);
alert(typeof convert2);

// QUESTION NO 2

var num4 = 35.36;
var re = num4.toString().replaceAll(".", "");
alert(re);

// ------------------------------------Controlling the length of decimals---------------------

// QUESTION NO 1

var percentage = (30 / 45) * 100;
var answer = percentage.toFixed(2);
alert(answer);
