/*
1. if...
2. if...else
3. if...else if...else
*/
function ifcondition(){
	simpleif();
	justOtherOne();
	conditionFail();
	addElse();
	ternay();
}

function simpleif(){

	var x=100;
	if(x==100){
		document.write("if condition pass");
		document.write("<hr>");
	}
}
function justOtherOne(){

var classTemp = 100;
if (classTemp==100) {
	classTemp=classTemp-20;
	document.write("Class temprature has changed to" + " " + classTemp + "<br>");
document.write("<hr>");
}
}
function conditionFail(){

var classTemp = 100;
if (classTemp==80) {
	classTemp=classTemp-20;
	document.write("Class temprature has changed to" + " " + classTemp + "<br>");
}

document.write("Outside of if condition. exection will continue when condition become false");
document.write("<hr>");
}

function addElse(){
	var classTemp=0;
	if (classTemp==100) {
		classTemp=classTemp-20;
		document.write("Class temp has changed to" + " " + classTemp + "<br>");
}
else{
	document.write("Temp has not changed");
	document.write("<hr>");
}
}
/* THERE IS AN ALTERNATIVE OF IF ELSE STATMENT i.e TERNARY OPERATOR*/
function ternay(){
var roomTemp = 100;
var roomTempStatus=(roomTemp==100) ? roomTemp-20 : roomTemp;
document.write("This is example of ternay operator where if else condition can be written in one line." ,"<br>");
document.write("Room current temp is" + " " + roomTempStatus + "<br");
document.write("<br>");
document.write("<hr>");

}

/*Comparison Operators

==
===
!=
!==
<
>
<=
>=

*/
/*

=  -assinging value
==  -checking for eqality
===  -checking for eqality as well as type of i.e int, string.
*/
function compOP(){
equalOp();
dEqualOp();
notEqual();
notdEqual();
}
function equalOp(){
	var age=18;
	if (age==18) {
document.write("This is result of = operator. <br>");
		document.write("Student age equal to 18", "<br>");
	document.write("<hr>");
	}
}
function dEqualOp(){
	var age = "18";
	if(age===18){
		document.write("This is result of === operator <br>");
		document.write("Student age eqaul to 18 and type is also same", "<br>");
	}
	else{
		document.write("Student age may not equal to 18 or type may not be same <br>");
	document.write("<hr>");
	}

}

function notEqual(){
	var age = 8;
	if(age != 18){
		document.write("This is result of != operator <br>");
	document.write("age is not equal to 18 <br>");
	}else{
		document.write("age is equal to 18 <br>");
	}
	document.write("<hr>");
}
function notdEqual(){
	var age = "18";
	if(age !==18){
		document.write("This is result of !== operator <br>");
		document.write("The age and type may be not  same <br>");
	}
	else{
		document.write("Age and type are same");
	}
	document.write("<hr>");
}

/*
Logical Operator:
&&  And
||  Or
!   Not
*/
function logicOp(){
andOp();
orOp();
notOp();
}

function andOp(){
	var age = 19;
	var name = "Ranjan";
	if ( (age > 18) && (name ==="Ranjan")) {
		document.write("Result of And Operator <br>");
		document.write("ok pass- Both condition are true <br>");
	}
	else{
		document.write("not pass");
	}
	document.write("<hr>");
}
function orOp(){
	var age =0;
	var name= "ranjan";
	if ((age==10) || (name=="ranjan")) {
		document.write("Result of Or operator <br>");
      document.write("ok Pass- Any one of condition are true <br>");
	}
	else{
		document.write("Not Pass");
	}
	document.write("<hr>");
}
function notOp(){
	var age = 17;
	if (!(age==18)) {
		document.write("This is result of ! operato. <br>");
		document.write("Ok Pass- condition of ! operator passed. <br>");
	}
	else{
		document.write("Not passed- condition Failed");
	}
	document.write("<hr>");
}

/* DIsplay the largest number among from the number given*/

function largest(){
	var a = 15;
	var b = 7;
	var c = 3;
	if ((a>b) && (a>c) ) {
		document.write("The largest number Is" + " " + a + "<br>");
	}
	else if ((b>c) && (b>a)) {
		document.write("The largest number Is" + " " + b + "<br>");
	}
else{
	document.write("largest is" + " " + c);
}
document.write("<hr>");
}

/* 
Conditional Switch Statement
*/
function switchStmt(){
	var grade = "a";
	switch (grade){
		case "a":
		document.write("Student with grade a <br>");
		break;
		case "b":
		document.write("Student with grade b <br>");
		break;
        case "c":
        document.write("Student with grade c <br>");
        break;
        default:
        document.write("No data found");
	}


}