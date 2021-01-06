// question no 1 

empty = []

// question no 2 

let object = {

}

// question no 3 

array=["usama","nawaz","adil","aslam"];

// question no 4 

array1= [1,2,3,4,]

// question no 5 

array2= [false, true]

// question no 6 

array3= [1,"usama",true]

// question no 7 

qualifications = ["1)SSC","2)HSC","3)BSCS","4)BS","5)BCOM","6)MS","7)M.Phil.","8)PhD"]

// question no 8 

stdname = ["Michael","John","Tony"]
stdscore = [320,230,480]
stdmarks= [500,500,500]
percentage_michael = (stdscore[0]/stdmarks[0]) * 100
percentage_John = (stdscore[1]/stdmarks[1]) * 100
percentage_Tony = (stdscore[2]/stdmarks[2]) * 100
document.write("<br>"+"Score of "+stdname[0]+" is "+stdscore[0]+". Percentage : "+percentage_michael + "%")
document.write("<br>"+"Score of "+stdname[1]+" is "+stdscore[1]+". Percentage : "+percentage_John + "%")
document.write("<br>"+"Score of "+stdname[2]+" is "+stdscore[2]+". Percentage : "+percentage_Tony + "%")

// question no 9 

color_names = ["red","green","blue","black","indigo","white"]
document.write("<br> <br>"+color_names)
ask = prompt("What color you want to add to the begining of an array? ")
color_names.unshift(ask)
document.write("<br>"+color_names)
ask2 = prompt("what color you want to add to the end of an array?")
color_names.push(ask2)
document.write("<br>"+color_names)
color_names.unshift("cyan","margenta")
document.write("<br>"+color_names)
color_names.shift()
document.write("<br>"+color_names)
color_names.pop()
document.write("<br>"+color_names)
ask3 = +prompt("At which index you wants to add a color name ?")
ask4 = prompt("give us color name?")
color_names.splice(ask3-1,0,ask4)
document.write("<br>"+color_names)
ask5 = prompt("At which index you wants to delete a color name ?")
color_names.slice(ask5-1,ask5)
document.write("<br>"+color_names)

// question no 10 

student_scores = [320,230,480,120]
student_scores.sort(function(a,b){return a -b});
document.write("<br>"+student_scores)

// question no 11 

city = ["karachi","lahore","islamabad","multan","rawalpindi"]
new_city = city.slice(0,3) 
document.write("<br>"+"Cities list".bold()+"<br>"+city)
document.write("<br>"+"Selected Cities list".bold()+"<br>"+new_city)

// question no 11 

var arr = ["This ", " is ", " my ","cat"];
document.write("<br> <br>"+"Array : ".bold()+"<br>"+arr)
document.write("<br> <br>"+"String : ".bold()+"<br>"+arr.join(" "))

// question no 11 

order = ["keyboard","mouse","printer ","monitor"]
document.write("<br> <br>"+"Devices : ".bold()+"<br>"+order)
document.write("<br> <br>"+"Out : "+"<br>"+order[0]+"<br>"+"Out : "+"<br>"+order[1]+"<br>"+"Out : " +"<br>"+order[2]+"<br>"+"Out : "+"<br>"+order[3])
document.write("<br> <br>"+"Devices : ".bold()+"<br>"+order)
document.write("<br> <br>"+"Out : "+"<br>"+order[3]+"<br>"+"Out : "+"<br>"+order[2]+"<br>"+"Out : " +"<br>"+order[1]+"<br>"+"Out : "+"<br>"+order[0])

// question no 11

manufactures = ["Apple","Samsung","Motorola","Nokia","Sony","Hair"]
manuf = document.getElementById("selectNow")
document.write(manuf.options[obj.seletedIndex].text)










