// question no 1 
arr = [[],[]]
// question no 2 
// arr_1 = [[0,1,2,3],"<br>",[1,0,1,2],"<br>",[2,1,0,1]]
// document.write(arr_1.join(" ")+"<br>")

// // question no 3 

// for (let index = 1; index <= 10; index++) {
//     document.write("<br>"+index+"<br>")
    
// }
// // question no 4 

// table = +prompt("Enter a number to show its multiplication table")
// table_length = +prompt("Enter length multiplication table")

// for ( var i = 1 ; i <= table_length; i++){
// document.write("<br>"+table+"*"+i+"="+i*table)
// }

// question no 5 

fruits = ["apple","banana","mango","orange","strawberry"]

for (var j=0; j < fruits.length ; j++){
    document.write("<br>"+fruits[j])
    document.write("<br>"+"Element at index "+j+" is "+fruits[j])
}

// question no 6 
for (let k = 1; k < 2 ; k++) {
    document.write("<br> <br> "+"")
    for (var l = 1; l<=15; l++){
    document.write(l+" "    )
}
}
document.write("<br>")

for (var m = 10  ; m >=0 ; m--){
    document.write( m+" ")
    
}
document.write("<br>")
a = [0,2,4,6,8,10,12,14,16,18,20]

for (var n = 0; n < a.length ; n++){
    document.write(a[n]+" ")
}
document.write("<br>")
odd = [1,3,5,7,9,11,13,15,17,19]
for (var o=0 ; o < odd.length ; o++){
    document.write(odd[o]+" ")
}

document.write("<br>")
k_series = [0,2,4,6,8,10,12,14,16,18,20]

for (p = 0; p <= 26 ; p++){
    document.write(k_series.join("k")[p]+ "  ")
}

// question no 7 

document.write("<br>")
bakery = ["cake","apple pie","cookie","chips","patties"]
input = prompt("Welcome to Anwar Bakery, What do you want to order sir/ma'm?")
for (var q =0 ; q< bakery.length; q++){
    if (input === bakery[q]){
        document.write(input +" is avaialable at index "+q+" in our bakery")
        break;
    }
    else {
        document.write(+"We are sorry"+input +"is not avaialable in our bakery")
        
    }
}

// question no 8 
document.write("<br>")
num = [24,53,78,91,12]
max = Math.max(...num)
document.write(max)

// question no 10 
document.write("<br>")
for (var s = 5; s <= 100 ; s += 5){
    document.write(","+s)
}
// question no 9 
document.write("<br>")
num = [24,53,78,91,12]
min = Math.min(...num)
documnet.write(min)
console.log(min)






