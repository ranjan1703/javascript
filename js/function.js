//JavaScript functions with parameter and return
//function with parameters.


function functionWithPara(a1, a2){
	var b = a1+a2;
	document.write("value of a1+a2=" + b + "<br>");
}
functionWithPara(23, 24);


//passing function as an argument to the parmeter.
//accept function as value

function parameterAsFun(func){
func();
}
parameterAsFun(hello);

function hello(){
	document.write("function as parameter works <br>");
}

//Return keyword in function
//when we want function to return some value we use return
function returnSum(b,c){
	return b+c;
	
}
var result=returnSum(5,2);//here we are storing returned value in result variable.
document.write("Returned value: " + result + "<br>");

/* JavaScript function as variable 
We can assign function to variable.
because in js function are object and can be assignd as variable,

*/
function sum(x,y)
{
	return (x+y);
}
//assign a function to variable
var s=sum;
//now s contain whole sum function and sum function can be invoked or called by s.
var r = s(10,20); //r is storing the result.

document.write("sum of x=10 and y=20 are" + r + "<br>")


/* Ananymous function
a function without name is ananymous function
*/
var isAdult = function(age){ //isAdult is a variable and we have assinged a function to this variable without name and passing one argument to this function.

if (age >= 18) {
	return "yes";
}
else{
	return "no";
}
}
var k=isAdult(25);
document.write("Adult status is " + k + "<br>");


/*
Self executing java script function .
it run automatically when we create it.
*/
(function(){   //to make function auto run we need to wrap the function within the parnethesis ().
	document.write("self executing function <br>");
})();//(); this is auto invoke operator


//alternate method
(function(){   //to make function auto run we need to wrap the function within the parnethesis ().
	document.write("self executing function alternative <br>");
}());

//passing arrgument to self executing function.
(function (x,y){
	document.write("sum of x and y" +(x+y) + "<br>");
})(18,20);

//it is possible for self executing function to return some value.
var sum=(function(x,y){
	return x+y;
})(10,20);
document.write("sum of x and y= " + sum);




/*SCOPE
-Global
-Local

*/