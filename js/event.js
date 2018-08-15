//An event is a signal from the browser that something has happened.
//An event occur when some sort of interaction takes place in a web page.

/*
Three methods to add an event handler to an event
1- inline
2-element.event
3-element.addEventListener
*/

"use strict";
/*function doSomething()//element event
{
window.open("https://www.google.com");
}*/
//get button by its id
//window.onload=function(){
/*var btnElement = document.getElementById("btn");
btnElement.onclick = function(){

	alert("event handler response");
}

var hElement = document.getElementById("my-heading");
hElement.onmouseover =function(){
if (this.className=="h-normal") {
	this.className="h-changed";
} else {
	this.className = "h-normal";
}
}*/
//3-element.addEventListener
var btn2Element =document.getElementById("btn2");
function changeBtnFontSize(){
	this.style.fontSize ="45px";
}

//btn2Element.addEventListener("click",changeBtnFontSize);
btn2Element.addEventListener("click", function(){alert("This will not overwrite previous event handler");}, true);


btn2Element.removeEventListener("click", changeBtnFontSize);

/*

Javascript -Errors handeling

*/

/*try{
	callMe();
}
catch(error){
	alert("Error Message: " + error.message);
}*/

//try.throw..catch
var x= "test";
try{
	if (isNaN(x)) {
		throw("Not a number.");
	}
}
catch(e){
	alert("Error: " + e);
}
finally{
	document.write("error but keep going");
}

/*
Strict mode- allows us to write secure code. it improve javascript code to inforcing programming practecies and eleminating some of the language in secure features.


*/



x =10; //proper way of declearing variable so it not give any error

alert(x);


/*y =20;
alert(y);*/
