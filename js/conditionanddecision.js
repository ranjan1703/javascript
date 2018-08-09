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
	document.write("<br>");
}

/* LOOPS
while
do.....while
for....
*/

function loops(){
whileLoop();
dowhileloop();
forloop();
evenOdd();
breakstmt();
contstmt();
}

function whileLoop(){
//Purpose of the while loop is to execute the statment repeatedly until the condition becomes false.
var x = 1;  
document.write("This is the result of while loop <br>");  //here we have value 1 to x 
while( x<=5){  //here we are saying that execute the statment until x become 5. so basiclly we are giving condition here.

	document.write(x + "<br>");
x++;    //here we are giving the logic or the opration to perfom..means increment the x until x reaches 5.
	}
	document.write("<hr>");
}

function dowhileloop(){

var x=11;
document.write("Result of do while <br>");
do{
	document.write(x +"<br>");
	x++;
}
while(x<=10);
/*here we can see that x value is 8 and condition is x<=10,
which means increment the x value by 1 until x reaches 10 so output will be 8 9 10 */
/* but when we give x=11 which dosnt satisfy the condition so in case of do-while do code execute first hence it will print 11 */
document.write("<hr>");
}


function forloop(){
	
	for(var a=7; a<=10; a++){
		document.write(a +"<br>");
	}
document.write("<hr>");
}

function evenOdd(){
	document.write("Find Odd and even of number between 0-10.");
	for (var a=0; a<=10; a++){

if (a===0) {
	document.write(a + " is even <br>");
}
		else if (a % 2 ===0) {
			document.write(a+ " is even <br>");
		}else{
			document.write(a+ " is odd <br>");
		}
	}
	document.write("<hr>");
	}
/*
Break and Continue
Break - break is used to halt the program execution and come out of block of code.
Continue --it is used to continue the haltd program and again execute the block of code.

*/
function breakstmt(){
	document.write("Result of break Statement");
	for (var i = 0; i<=10; i++){
		if(i==7){
			break;
		}
		document.write(i +"<br>");
	}
	document.write("<hr>");
}
function contstmt(){
	document.write("Result of continue Statement we can see 5 is missing <br>");
	for (var i = 0; i<=10; i++){
		if(i==5){
			continue;
		}
		document.write(i +"<br>");
	}
}



