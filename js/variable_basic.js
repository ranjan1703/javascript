

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
	IncrementPost();
	DecrementPre();
	PostPre();

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
function IncrementPost(){
	var x=100;
	 x++;        //postfix increment operator
	document.write("<br>");
	document.write("<hr>");
	document.write("Increment of x=100 Is:  ");
	document.write(x);
	document.write("<br>");
	}

	

function DecrementPre(){
	var x=100;
	 --x;               //prefix decrement operator
	document.write("<hr>");
	document.write("Decrement of x=100 Is:  ");
	document.write(x);
}


function PostPre(){
	var a=10;
	document.write("<hr>");
	document.write("Postfix of a=10: ");
	document.write(a++);

	var a=10;
	document.write("<br>");
	document.write("Prefix of a=10: ");
	document.write(++a);
}

/*
Assignment Operators

OPERATORS              EXAMPLE        SAME AS
---------              -------       ---------

=                       x=y
+=                      x+=y           x=x+y
-=                      x-=y           x=x-y
*=                      x*=y           x=x*y
/=                      x/=y           x=x/y
%=                      x%=y           x=x%y

*/

function AssignmentOperator(){
equalAssOP();
addAssigOp();
subAssigOp();
}

function equalAssOP(){
	var x= 10;
	var y=100;
	x=y;
	document.write("Equal Assignment operator of x=10 and y=100 Is: ");
	document.write(x);
	document.write("<br>");
	document.write("Value of y remain: ");
	document.write(y);
}

function addAssigOp(){
	var x=10;
	x+=50;
document.write("<hr>");
document.write("Addition Assignment Operator result of x=10 and 'x+=50' Is: ");
document.write(x);
}
function subAssigOp(){
	var x=100;
	x-=50;
document.write("<hr>");
document.write("Substration Assignment Operator result of x=100 and 'x-=50' Is: ");
document.write(x);
}
/* Rest can be done is same way*/



/*
Concatenation Operator (+): string1 + " " +string2

*/

function concatenation(){
concString();
concNumStr();
concNumStrAsNum();
}

function concString(){

	var firstName="Ranjan";
	var lastName="Singh";
	var fullName=firstName + " " + lastName;
	document.write("<hr>");
	document.write("First name: ", firstName);
	document.write("<br>");
	document.write("Last name: ", lastName);
	document.write("<br>");
	document.write('Result of fullName = firstName + " " + lastName: ');
	document.write(fullName);
	document.write("<hr>");
	
}
function concNumStr()
{
	var a="Hello";
	var b=10;
	var c= a + " " + b;
	document.write('Result of c = a + " " + b where a = "hello" and b = 10: ');
	document.write(c);



}
function concNumStrAsNum()
{
	var a="10";
	var b=10;
	var c= a + b;
	document.write("<hr>");
	document.write('Result of c = a + b where a = "10" and b = 10: ');
	document.write(c);
	document.write("<br>");
	document.write("*Note that the return value will be string type is this case.");
}




