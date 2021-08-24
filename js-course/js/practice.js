document.write("<i><b>Hello I'm from external JS</b></i>");

document.write("<br/>Exam result calculation program: <br/>");

// var per = prompt("Enter your Percentage : ");

// if(per >= 80 && per <= 100){
//     document.write("<br/>You are in Merit.");
// }else if(per >= 60 && per < 80){
//     document.write("<br/>You are in Ist Divisio.");
// }else if(per >= 45 && per < 60){
//     document.write("<br/>You are in 2nd Division.");
// }else if(per >= 33 && per < 45){
//     document.write("<br/>You are in 3rd Division.");
// }else if(per < 33){
//     document.write("<br/>You are Fail.");
// }else{
//     document.write("<br/>Please Enter Valid Percent.")
// }

document.write("<br/><br/>Example of Ternary Operator: <br/>");

var terA = 10;
var terB;
//(terA == 100)? b = "True" : b = "False";
//b = (terA == 100)? "True" : "False";
b = "Value is " + (terA == 100? "True" : "False");
document.write(b);

document.write("<br/><br/>Example of Switch: <br/>");

var day = 2;

switch (day) {
    case 1:
        document.write("Today is Monday");
        break;
    case 2:
        document.write("Today is Tuesday");
        break;
    case 3:
        document.write("Today is Wednesday");
        break;
    case 4:
        document.write("Today is Thursday");
        break;
    case 5:
        document.write("Today is Frday");
        break;
    case 6:
        document.write("Today is Saturday");
        break;
    case 7:
        document.write("Today is Sunday");
        break;
    default:
        document.write("Please type valid Day.");
        break;
}

document.write("<br/><br/>Example of Alert: <br/>");

var alrtA = 40;
var alrtB = 30;

if(alrtA > alrtB){
    //alert("A is Greater.");
    //alert("A value is: " + alrtA);
    //alert(alrtA + alrtB)
}else{
    //alert("B is Greater.");
    //alert("B value is: " + alrtB);
}

document.write("<br/><br/>Example of Function: <br/>");

function hello(fname = "Mr.", lname = "Howdy"){
    document.write("Hello " + fname + " " + lname + "<br/>");
}

hello("Altaf", "Hossain");
hello("Mr.", "Rahim");
hello();

function sum(math, eng, sc){
    var s = math + eng + sc;
    return s;
}

function percantage(tt){
    var per = tt/300 * 100;
    document.write(per);
}

var total = sum(80, 65, 40);
percantage(total);

function eventFn(fname = "Mr.", lname = "Howdy"){
    alert("Hello " + fname + " " + lname);
}

document.write("<br/>");

//Example of while Loop
var a = 10;
document.write("<ul>");
while(a >= 1){
    document.write("<li>" + a + ") This is While Statement</li>");
    a--;
}

document.write("</ul>");

//Example of Do while Loop
var dh = 1;
do {
    document.write( dh + ") This is Do While Statement <br/>"); 
    dh++;
}while(dh <= 10);

//Example of For Loop
document.write("<br/>");

for(var f = 1; f <= 10; f++){
    document.write( f + ". This is For Loop Statement<br/>")
}

//example of continue & Break
document.write("<br/>");

for(var c = 1; c <= 10; c++){

    if(c == 4){
        document.write("Hey this is Number 4<br/>");
        continue;
        //break;
    }

    document.write("Number: " + c + "<br/>");
}

//Find of odd and even number
document.write("<br/>Even Numbers of 1-10 Series: <br/>");
for(var a = 1; a <= 10; a++){
    if(a % 2 == 0){
        document.write(a + "<br/>");
    }
}

document.write("<br/>Odd Numbers of 1-10 Series: <br/>");
for(var a = 1; a <= 10; a++){
    if(a % 2 != 0){
        document.write(a + "<br/>");
    }
}

//Example of Table date print

document.write("<br/>Example of Table data print: <br/>");

for(i = 1; i <= 100; i = i+10){
    for(j = i; j < i+10; j++){
        document.write(j + "  ");
    }
    document.write("<br/>");
}

//Example of Series Data print
document.write("<br/>Example of Series Data print: <br/>");

for(var a = 1; a <= 5; a++){
    for(var b = 1; b <= a; b++){
        document.write(b + " ");
    }
    document.write("<br/>");
}

document.write("<br/>");

for(var a = 5; a >= 1; a--){
    for(var b = 1; b <= a; b++){
        document.write(b + " ");
    }
    document.write("<br/>");
} 

document.write("<br/>");

for(var a = 1; a <= 5; a++){
    for(var b = 1; b <= a; b++){
        document.write(a + " ");
    }
    document.write("<br/>");
}  

document.write("<br/>");

for(var a = 5; a >= 1; a--){
    for(var b = 1; b <= a; b++){
        document.write(a + " ");
    }
    document.write("<br/>");
}  

//Example of Array
document.write("<br/>Example of Array: <br/>");
document.write("<ul>");
var ary = [10, 20, 30, 40, 50];
var arySum = 0;
for(var a = 0; a < ary.length; a++){
    document.write("<li>" + ary[a] + "</li>");
    arySum = arySum + ary[a];
}
document.write("</ul>");

document.write("Total Arry Sum: " + arySum);

// document.write("<ul>");
// var ary2 = new Array(3);
// for( var g = 0; g < ary2.length; g++){
//     ary2[g] = prompt("Enter The Value: ")
// }
// for(var a = 0; a < ary2.length; a++){
//     document.write("<li>" + ary2[a] + "</li>");
// }
// document.write("</ul>");

// Multi-dimentional Array

document.write("<br/>Example of Multi-dimentional Array: <br/><br/>");

var multiAry = [
    ["Harry", 18, "Male", "B.Com"],
    ["Sunny", 19, "Male", "BCA"],
    ["Rahima", 24, "Female", "MBBS"],
    ["Karim", 29, "Male", "B.A"]
]

document.write("<table border='1px' cellspacing='0'>")
for(var a = 0; a < multiAry.length; a++){
    document.write("<tr>");
    for(var b = 0; b < multiAry[a].length; b++){
        document.write("<td>" + multiAry[a][b]) + "</td>";
    }
    document.write("</tr>");
}
document.write("</table>")


// Sort & Reverse Array

document.write("<br/>Example of Sort & Reverse Array: <br/><br/>");

var sAry = ["Rahim", "Karim", "Altaf", "Sadia"];
document.write(sAry + "<br/>");
sAry.sort();
document.write(sAry + "<br/>");
sAry.reverse();
document.write(sAry + "<br/>");

// example of push & POP

sAry.pop();
document.write(sAry + "<br/>");
sAry.push("Hamid")
document.write(sAry + "<br/>");

// example of Shift & Unshift

sAry.shift();
document.write(sAry + "<br/>");
sAry.unshift("Altaf");
document.write(sAry + "<br/>");

// example of Concat & Join

var a = ["Rahim", "Karim", "Altaf", "karim", "Sadia"];
//var b = a.concat("Saiful", "Rahima");
var b = ["Saiful", "Rahima", "Raton"];
var c = a.concat(b);
document.write(c + "<br/><br/>");

var d = c.join("-");

document.write(d + "<br/><br/>");

// Example of Slice & Splice

var e = a.slice(1,4);

document.write(e + "<br/><br/>");

e.splice(2, 0, "Jahid", "Tania");
document.write(e + "<br/><br/>");

// Example of isArray()

var iA = ["Rahim", "Karim", "Altaf", "Sadia"];

//var iA = 35;

document.write(iA + "<br/><br/>");

if(Array.isArray(iA)){
    document.write("This is an Array<br/><br/>");
}else{
    document.write("This is not an Array<br/><br/>");   
}

// Example of indexOf & lastIndexOf
var ai = ["Rahim", "Karim", "Altaf", "Karim", "Sadia"];
document.write(ai + "<br/><br/>");

var f = ai.indexOf("Karim", 2);

document.write(f + "<br/><br/>");

var fl = ai.lastIndexOf("Karim", 2)

document.write(fl + "<br/><br/>");

// Example of includes Methode


var bi = ["Rahim", "Karim", "Altaf", "Karim", "Sadia"];

var bj = bi.includes("Karim");
document.write(bj + "<br/><br/>");

// Example of Some & Every


var ages = [25, 28, 18, 36, 29];
document.write(ages + "<br/><br/>");
//var ageTest = ages.some(checkAdult);
var ageTest = ages.every(checkAdult);
document.write(ageTest + "<br/><br/>");

function checkAdult(age){
   return age >= 18;
}

// Example of Find and findIndex


var ages2 = [5, 12, 13, 36, 29];
document.write(ages2 + "<br/><br/>");
var ageTest2 = ages2.find(checkAdult);
//var ageTest2 = ages2.findIndex(checkAdult);
document.write(ageTest2 + "<br/><br/>");

// Example of Filter Method

var ageFilter = [50, 12, 13, 36, 29];
document.write(ageFilter + "<br/><br/>");
var ageFilterTest = ageFilter.filter(checkAdult);
document.write(ageFilterTest + "<br/><br/>");

// Example of toString, valueOf & Fill Method

var nameArray = ["Rahim", "Karim", "Jashim"];
//name.toString();
//name.valueOf();
nameArray.fill("Allah");
document.write(nameArray + "<br/><br/>");

// Example of forEach Method

var nameArray = ["Rahim", "Karim", "Jashim"];

nameArray.forEach(nameLoop);

function nameLoop(value, index){
    document.write(index + " : " +value + "<br/>");
}


// Example of Object

document.write("Example of object <br/><br/>");

var person = {
    fname: "Altaf",
    lname: "Hosaain",
    age: 32,
    email: "csealtaf@gmail.com",
    address: {
        road: 4,
        city: "Dhaka",
        country: "Bangladesh"
    },
    favMovies: ["Tatanic", "Mission Impossible", "Message"],
    salary: function(){
        return 50000;
    },
    fullname: function(){
        return this.fname + " " + this.lname;
    }

}

document.write(person.fullname() + "<br/>" + person.email + "<br/>" + person.age + "<br/>" + person.salary() + "<br/>");

document.write(person.favMovies + "<br/>" + person.address.city + "<br/>");

var person2 = new Object();
person2.firstName = "Karim";
person2.lastName = "Uddin";
person2.age = 25;

document.write(person2.firstName + "<br/>" + person2.age + "<br/>")

//JavaScript Const variable with Array & Objects

// const cns = [20, 30, 40, 50];
// cns[1] = 25;
// console.log(cns);
// document.write("The const value is: " + cns + "<br/>");

const cns = {
    name: "Karim",
    age: 25
};

cns.name = "GrowBig";
console.log(cns);



