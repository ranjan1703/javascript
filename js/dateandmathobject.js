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