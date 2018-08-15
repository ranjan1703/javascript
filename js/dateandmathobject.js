//JavaScript built-in Date and Math Objects

var rightNow = new Date();
//alert(rightNow);

//we can pass argument to date constructor
var dt =new Date(525522446225);
//alert(dt);

//Passing date string
dte = new Date("September 15, 2017");
//alert(dte);

//passing value of year, month, day, hour ,minute, second and milliseconds to Date
dtt = new Date(2001, 1, 24, 6, 12, 8);
//alert(dtt); 

//Date object with methods

var dtm = new Date();
//get todays date only
document.write("Today is: " + dtm.getDate() + "/" + dtm.getMonth() + "/" + dtm.getFullYear() + "<br>");
document.write("Time is:" + dtm.getHours() + ":" + dtm.getMinutes() + ":" + dtm.getSeconds() + "<br>");



//Math object handle mathenatical operation
var sqr = Math.sqrt(20);
document.write("Square root of 20:" + sqr + "<br>");

var min = Math.min(12,34,1,2,30);
document.write("Minimum: " + min + "<br>");

var max = Math.max(12,34,1,2,30);
document.write("Maximum: " + max + "<br>");

//random number
var rand = Math.random();
document.write("random: " + rand + "<br>");
//round number
var rnd = Math.round(99.9);
document.write("Rounded " + rnd + "<br>");




/*
Array in javascript
it lets you store multiple value in a single variable.

*/

//create an array using new keyword

var myColors = new Array("Red", "Green", "Blue");
document.write(myColors[1] + "<br>");

//alternate way
var myColor=["red","green","blue"];
document.write(myColor[0] + "<br>");

//modify array element
myColor[1] ="yellow";
document.write(myColor[1] + "<br>");


//access all element of array
document.write(myColor +"<br>");

//find the length of array
document.write(myColor.length +"<br>");

//sort an array alphabetically
document.write(myColor.sort() + "<br>");

//revrse an array
document.write(myColor.reverse() + "<br>");

//add element using push
myColor.push("pink");
document.write(myColor + "<br>");

//remove an element by pop 
myColor.pop("pink");
document.write(myColor +"<br>");
 
 myColor.pop("blue");
document.write(myColor +"<br>");
 
 //join two or more array

 var listOfnumber1=[1,2,3];
 var listOfnumber2=[4,5,6];
 var allnum = listOfnumber1.concat(listOfnumber2);
 document.write(allnum + "<br>");


//loop through array element

/*var myCars = ["BMW", "Honda", "Toyota"];
for (var i=0; i < myCars.length; i++){
	document.write(myCars[i] + "<br>");
}*/ 


//create array of object

var myCars =[
{ model:"BMW", year: 2016},
{ model:"Honda", year:2015},
{ model: "Toyota", year:2016}

];
for (var k=0; k < myCars.length; k++){
	var myCar = "";
	for (var cp in myCars[k] ){
		myCar = myCar + myCars[k][cp];
	}
	document.write(myCar + "<br>");
}

//Program to find reading status of book
var eBooks = [
{title: "PHP", author: "ranjan", readingStatus: true },
{title: "Html", author: "Ravi", readingStatus: false },
{title: "Java", author: "Kishan", readingStatus: true }
];
for (var a=0; a < eBooks.length; a++){
	var book = "'" +eBooks[a].title + "'" + eBooks[a].author +".";
if(eBooks[a].readingStatus){
	document.write("Already read " + book + "<br><br>");
	}else{
	document.write("still need to read " + book + "<br>");
}
}
