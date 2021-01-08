// question no 1
var check = prompt("enter number or string(in uppercase or in lowercase only)");
if (check >= "A" && check <= "Z") {
  alert("number is uppercase");
} else if (check >= "a" && check <= "z") {
  alert("number is lowercase");
} else {
  alert("number is integer");
}

// question no 2

f_number = +prompt("Enter the first number");
s_number = +prompt("Enter the second number");

if (f_number > s_number) {
  alert(f_number + " is greater number ");
} else if (f_number < s_number) {
  alert(s_number + " is greater number ");
}
if (f_number === s_number) {
  alert(" both numbers are equal");
}

// question no 3

num = +prompt("Enter the number ");
if (num > 0) {
  alert("The number is positive");
} else if (num < 0) {
  alert("The number is negative");
} else if (num === 0) {
  alert("The number is equal to zero");
} else {
  alert("please enter correct value");
}

// question no 4

num1 = prompt("Enter one character or one alphabet");
if (
  num1 === "a" ||
  num1 === "e" ||
  num1 === "i" ||
  num1 === "o" ||
  num1 === "u"
) {
  alert("The given character is vowel");
} else {
  alert(false);
}

// question no 5

pswd = "js12345".toUpperCase();
ask_pswd = prompt("enter the password").toUpperCase();
if (pswd === ask_pswd) {
  alert("Correct");
} else {
  alert("incorrect password");
}

// question no 6

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
// question no 7
var time = +prompt("enter time", "1900");
if (time >= 0000 && time < 1200) {
  alert("good morning");
} else if (time >= 1200 && time < 1700) {
  alert("good afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("good evening");
} else if (time >= 2100 && time <= 2359) {
  alert("good night");
} else {
  alert("incorrect time");
}
