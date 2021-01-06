// question no 1

// question no 2 

f_number = +prompt("Enter the first number")
s_number = +prompt("Enter the second number")

if (f_number > s_number){
    alert(f_number +" is greater number ")
}
else if (f_number < s_number){
    alert(s_number +" is greater number ")
}
if (f_number === s_number){
    alert(" both numbers are equal")
}

// question no 3 

num = +prompt("Enter the number ")
if (num > 0 ){
    alert("The number is positive")
}
else if (num < 0 ){
    alert("The number is negative")
}
else if (num === 0 ){
    alert("The number is equal to zero")
}
else{
    alert("please enter correct value")
}

// question no 4 

num1 = prompt("Enter one character or one alphabet")
if ( num1 === "a" || num1 === "e" || num1 === "i" || num1 === "o" || num1 === "u"){
    alert("The given character is vowel")
}
else{
    alert(false)
}