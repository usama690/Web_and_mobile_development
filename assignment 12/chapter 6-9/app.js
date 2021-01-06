// question no 1
a= 10
a1= 11
a2=12

document.write("Result:")
document.write("<br>"+"The value of ++a is: "+a)
document.write("<br>"+"...............................................")
document.write("<br> <br>"+"The value of ++a is: "+a1)
document.write("<br>"+"Now the value of a is: "+a1)
document.write("<br> <br>"+" the value of a++ is: "+a1)
document.write("<br>"+" Now the value of a is: "+a2)
document.write("<br> <br>"+"the value of --a is: "+a1)
document.write("<br>"+"Now the value of a is: "+a1)
document.write("<br> <br>"+"the value of a-- is: "+a1)
document.write("<br>"+"Now the value of a is: "+a)

// question no 2

var c = 2 ;
var d = 1 ;
var result= --c - --d + ++d + d--;
var result1= "--c : 1"
var result2= "--c - --d : 1"
var result3= "--c - --d + ++d : 2"
var result4= "--c - --d + ++d + d-- : 3"

document.write("<br> <br>"+"Explaning Equation".bold())
document.write("<br>"+result1)
document.write("<br>"+result2)
document.write("<br>"+result3)
document.write("<br>"+result4)
document.write("<br>"+"c is: "+c)
document.write("<br>"+"d is: "+d)
document.write("<br>"+"result is: "+result)

// question no 3 
var user= prompt("Enter your name please: ")
document.write("<br><br>"+"Hello "+user+" nice to meet you")

// question no 4 
// var input= prompt("Enter number: ")
// for(var i=1 ; i <10; i+input){
//     document.write("<br>"+input+"X"+i+"="+i)
// }

// question no 5 
input_urdu= +prompt("Enter Obtained marks of Urdu: ")
input_maths= +prompt("Enter Obtained marks of Maths: ")
input_eng= +prompt("Enter Obtained marks of English: ")
var sub1 = "Urdu"
var sub2 = "Maths"
var sub2 = "English"
total_urdu= 100
total_maths= 100
total_eng= 100
obt_urdu = input_urdu
obt_maths = input_maths
obt_eng = input_eng
percent_urdu= (obt_urdu/total_urdu)*100 +"%"
percent_maths= (obt_maths/total_maths)*100 +"%"
percent_eng= (obt_eng/total_eng)*100 +"%"
total_marks= (total_urdu + total_maths +total_eng)
obtained_marks = (obt_urdu+obt_maths+obt_eng)
total_percent = (obtained_marks/total_marks)*100 +"%"

document.write("<br> <br>"+"Subject".bold())
document.write("   Total Marks".bold())
document.write("   Obtained Marks".bold())
document.write("   Percentage".bold())
document.write("<br>"+"Urdu")
document.write(" "+total_urdu)
document.write(" "+obt_urdu)
document.write(" "+percent_urdu)
document.write("<br>"+"Maths")
document.write(" "+total_maths)
document.write(" "+obt_maths)
document.write(" "+percent_maths)
document.write("<br>"+"English")
document.write(" "+total_eng)
document.write(" "+obt_eng)
document.write(" "+percent_eng)
document.write("<br>"+total_marks)
document.write(" "+obtained_marks)
document.write(" "+total_percent)