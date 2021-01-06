// question no 1 
var city = prompt("Enter your favourite city name")
    kar= city.toLowerCase
if (city === "karachi"){
    alert("welcome to city of lights")
}
else{
    alert("Error")
}

// // question no 2 

var gender = prompt("Enter your gender")
out= gender.toLowerCase
if (gender === "male"){
    alert("Good Morning sir")
}
else{
    alert("Good Morning Mam")
}

// question no 3 
color_input = prompt("Enter the traffic signal color name ")
output = color_input.toLowerCase
var color = "Red"
var color2 = "Yellow"
var color3 = "Green "

document.write("<br>"+"Signal Color : "+ ".............................. Message")

if (color_input === "red"){
    document.write("<br>"+"<br>"+color+" ......................................Must Stop")
}
else if (color_input === "yellow"){
    document.write("<br>"+"<br>"+color2+"...................................... Ready to move")
}
else if (color_input === "green"){
    document.write("<br>"+"<br>"+color3+"......................................... Move now")
}
else {
    document.write("<br>"+"<br>"+"please enter right value")
}

// question no 4 

fuel = +prompt("Please enter the remaining fuel in car")
car_fuel = fuel.toLowerCase
if (fuel > 0.25){
    alert("Please refill the fuel in car")
}
else{
    alert("Your fuel is full")
}
// question no 5 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost +  materialCost){
    alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}

// question no 6 
document.write("<br> <br>" +"Marks Sheet".bold())
total_marks = +prompt("Enter your Total Marks ")
eng_obt = +prompt("Enter English obtained marks")
urdu_obt = +prompt("Enter Urdu obtained marks")
maths_obt = +prompt("Enter Maths obtained marks")
obt_marks = (eng_obt + urdu_obt + maths_obt) 
percent= (obt_marks / total_marks) * 100
percent_out = percent 
if ((percent_out >= 80) && (percent < 100)  ){
    document.write("<br> <br>"+  " Total Marks : "+total_marks + "<br>" + "Marks Obtained : " + obt_marks+"<br>" +"Percentage : " + percent + " %" +"<br>" +"Grade : " +"A-one" +"<br>" +"Remarks : "+ "Excellent")
}
else if (percent_out >= 70 ){
    document.write("<br> <br>"+  " Total Marks : "+total_marks + "<br>" + "Marks Obtained : " + obt_marks+"<br>" +"Percentage : " + percent + " %" +"<br>" +"Grade : " +"A" +"<br>" +"Remarks : "+ "Good")
}
else if (percent_out >= 60 ){
}
else if (percent_out < 60 ){
    document.write("<br> <br>"+  " Total Marks : "+total_marks + "<br>" + "Marks Obtained : " + obt_marks+"<br>" +"Percentage : " + percent + " %" +"<br>" +"Grade : " +"Fail" +"<br>" +"Remarks : "+ "Sorry")
}
else{
    document.write("<br> <br>" +"Please enter correct value")
}
// question no 7 

secret = 9
guess = +prompt("Guess Secret Number")
if (guess === secret ){
    alert("Bingo! Correct answer")
}
else if (guess === secret + 1 ){
    alert ("Close enough to the correct answer. ")
}
else {
    alert("You are wrong")
}

// questionn no 8 

divisible = +prompt("Enter the Number")
modulus = divisible % 3
if (modulus === 0 ){
    alert("The number is divisible by 3 ")
}   
else{
    alert("It can't be divide by 3 ")
}

// question no 9 

check = +prompt("Enter the number ")
check_out = check % 2 
if (check_out === 0 ){
    alert("The number is even")
}
else{
    alert("The number is odd ")
}

// question no 10 

var T = +prompt ("Enter the Temperature")
if (T >= 40 ){
    alert("It is too hot outside ")
}
else if ((T >= 30) && (T < 40 ) ){
    alert("The weather today is normal ")
}
else if ((T >= 20) && (T < 30 ) ){
    alert("Today's weather is cool ")
}
else if ((T >= 10) && (T < 20) ){
    alert("OMG! Today's weather is so cool. ")
}
else {
    ("please enter correct value")
}

// question no 11 

f_number = +prompt("Enter first number")
s_number = +prompt("Enter second number")
o = prompt("Enter Operator (+,-,*,/,%)")
plus = f_number + s_number
minus = f_number - s_number
multiply = f_number * s_number
division = f_number / s_number
remainder = f_number % s_number

if (o === "+"){
    document.write("<br> <br>"+ "Your answer is:  "+ plus)
}
if (o === "-"){
    document.write("<br> <br>"+ "Your answer is:  "+ minus)
}
if (o === "*"){
    document.write("<br> <br>"+ "Your answer is:  "+ multiply)
}
if (o === "/"){
    document.write("<br> <br>"+ "Your answer is:  "+ division)
}
if (o === "%"){
    document.write("<br> <br>"+ "Your answer is:  "+ remainder)
}
