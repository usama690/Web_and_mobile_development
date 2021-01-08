// question no 1
function alert1() {
  alert("Error! Please enter a valid password");
}
//  question no 2

function alert2() {
  alert("Welcom to JS Land" + "\n" + "Happy Coding");
}

// question no 3

function alert3() {
  alert("Welcome to JS Land");
  alert("Happy Coding !");
}

// question no 4

function alert4() {
  alert("Hello.... I can run JS through my web browser's console");
}

// ........CHAPTER ONE COMPLETED.............

// ............CHAPTER TWO STARTED............

// question no on1
var username;
// question no 2
var myName = "Muhammad Usama Nawaz";
// question no 3
var message = "Hello World";
function Message() {
  alert(message);
}
// question no 4

var std_name = "usama";
var std_age = "21 years old";
var std_qualification = "Web and Mobile application development";
function Biodata() {
  alert(std_name);
  alert(std_age);
  alert(std_qualification);
}

// question no 5

var pizza =
  "pizza".toUpperCase() +
  "\n" +
  "pizz".toUpperCase() +
  "\n" +
  "piz".toUpperCase() +
  "\n" +
  "pi".toUpperCase() +
  "\n" +
  "p".toUpperCase();
function Pizza() {
  alert(pizza);
}

// question no 6

var email = "nawazmuhammadusama@gmail.com";
function Concat() {
  alert("My email address is ".concat(email));
}

// question no 7
var book = "A smarter way to learn JavaScript";
function Book() {
  alert("I am trying to learn from the book ".concat(book));
}

// question no 8
var Yah = "Yah! I can write HTML content through Javascript";
document.write(Yah);

// ............CHAPTER 2 END.............

// ...............CHAPTER 3 START..........
// question no 1
var age = 21;
function Age() {
  alert("Iam " + age + " years old");
}
// question no 2

var n = "14";
function Visited() {
  alert("You hav visited this site " + n + " times");
}

// question no 3

var birthYear = "1999";
var inner1 = "My birth year is" + birthYear;
document.getElementById("birth_Year").innerHTML =
  inner1 + "<br>" + "Data type of my declared variable is number";

// question no 4
var visitor_name = "usama";
var prod_title = "shirt";
var quantity = 5;
document.getElementById("shopping").innerHTML =
  visitor_name +
  " ordered " +
  quantity +
  " " +
  prod_title +
  " on xyz clothing store";

// CHAPTER 3 END

// ...........practice start

// table through for loop
// var prom3 = +prompt("enter number");
// var prom1 = +prompt("enter where to start");
// var prom2 = +prompt("enter where to end");

// for (var prom1; prom1 < prom2; prom1++) {
//   console.log(prom3 + "x" + prom1 + "=" + prom3 * prom1);
// }

// ............CHAPTER NO 4 START

// question no 1
var1 = var2 = var3 = "Three variables in one statement";

// question no 2

// illegal variables

// 76trombones = "big parade"
// class = "Computer Science 101"
// var ill egal = "illegal"
// 2result ='name'

// legal variables
more$ = 1000000;
var ᾩ = "something";
var ĦĔĽĻŎ = "hello";
var 〱〱〱〱 = "less than? wtf";
var KingGeorgeⅦ = "Roman numerals, awesome!";

// question no 3

var chapter_4_heading = document.getElementById("chapter-4-heading");
var para1 = document.getElementById("para1");
var para2 = document.getElementById("para2");
var para3 = document.getElementById("para3");
var para4 = document.getElementById("para4");
chapter_4_heading.innerHTML = "Rules for naming JS variables";
para1.innerHTML =
  "Variable names can only contains numbers, $  and .For example $my_1stVariable";
para2.innerHTML =
  "Variables must begin with a letter, $ or_. For example $name, _name or name";
para3.innerHTML = "Variable names are case sensitive";
para4.innerHTML = "Variable names should not be JS keywords";
// CHAPTER NO 4 End

