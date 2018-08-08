

//variable in javascript

/*
Syntax of defining variable in javascript

var VariableName;
var variableName= "Variable Value";

Variable:- variable are container that holds some data, it grab some memory and we can give some name to it and assign some value to it.
and it insdie javascript code.
*/
function allAboutVariable()
{
	myVariable();  //Calling other function indse the function, this will print the result of both function.
	
	myName();
	
	yourName();
	
	noVar();

}
function myVariable()
{ 
	 document.write("Only Declaration but no initilization of variable.");
	document.write("<br>");
	var myFirstvariable; //This is undefined varable and print same on output
document.write(myFirstvariable); //we dont need "" in document.write when we write variable.
}


function myName(){
	document.write("<hr>");
	document.write("Declaration and initilization of the variable.");
	document.write("<br>");
	var myname;         //This is called declaration of the variable.
	myname="Ranjan";      //This is called variable initialization.
	document.write(myname);
}

//declaration and initilization at the same time or line.

function yourName(){
	document.write("<hr>");
	document.write("Declaration and initilization at the same time or line.");
	document.write("<br>");
	var yourname="Ravi"; //It is good practice.
	document.write(yourname);
}

function noVar(){
	//we can also ignore var keyword while declation of variable but it is not good practice.
	myCar = "Honda";
	document.write("<hr>");
	document.write("Declaration of variable without using 'var' keyword");
	document.write("<br>");
	document.write(myCar);
}

/*--------------ALL About Variable End here----------*/

/*
Arithmetic Opertors

+        Addition
-        Substration
*        Multiplication
/        Division
%        Modulus
++       Increment
--       Decrement

*/
function arithmaticOpration(){
	addition();
	Substration();
	Multiplication();
	Division();
	Modulus();
	Increment();
	Decrement();

}

function addition(){
	var x=100, y=100;
	var z=x+y;
	document.write("Addition of x=100 and y=100 Is:  ");
	document.write(z);
}
function Substration(){
	var x=100, y=50;
	var z=x-y;
	document.write("<br>");
	document.write("<hr>");
	document.write("Substration of x=100 and y=50 Is:  ");
	document.write(z);
}
function Multiplication(){
	var x=100, y=50;
	var z=x*y;
	document.write("<br>");
	document.write("<hr>");
	document.write("Multiplication of x=100 and y=50 Is:  ");
	document.write(z);
}
function Division(){
	var x=100, y=50;
	var z=x/y;
	document.write("<br>");
	document.write("<hr>");
	document.write("Division of x=100 and y=50 Is:  ");
	document.write(z);
}
function Modulus(){
	var x=100, y=50;
	var z=x%y;
	document.write("<br>");
	document.write("<hr>");
	document.write("Modulus of x=100 and y=50 Is:  ");
	document.write(z);
}
function Increment(){
	var x=100;
	 x++;
	document.write("<br>");
	document.write("<hr>");
	document.write("Increment of x=100 Is:  ");
	document.write(x);
}
function Decrement(){
	var x=100;
	 x--;
	document.write("<br>");
	document.write("<hr>");
	document.write("Decrement of x=100 Is:  ");
	document.write(x);
}








