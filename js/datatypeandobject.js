//JavaScript Data types and objects
// Dynamic type language -which means we dont need to define the data type of the variable. like int, string, etc.


/*
Two type of data type in javascript

- Premitive Data type
- Non - Primitive (Reference) Data Type

*/

var a = 10; //In js same variable can hold different type of data type
document.write(typeof(a) + "<br>");

a = "hey"; 
document.write(typeof(a) + "<br>");

/*Premitive data type

1. string    //hello
2.number     //20
3.boolean    //true or false
4. null      //no value
5. undefined   //undefined

*/
//example
var a ="hello";
var n = 7;
var b =true;
var x =null;  //It represent no value at all
var y =undefined; //undefined represents value not yet defined.


//Non premitive data type
/*
In javaScript non premitive data type are Object 
any thing which dosent belong to family of premitive data type are Object in java script
 
 Non -premitive data type are.
 1. Object
 2. Array
 3. Regular expression
 4. Function
 5. Date
*/

var employee = new Object(); //represent an instance of an object.
var books = new Array();    //represent group of similar values.
var reg = new RegExp();      //represents regular expression.
var myfun = new Function();
var todayDate = new Date();

document.write(typeof(books) + "<br>"); //it will return object.


//Both premitive and non premitive data tpye can be declared using var keyyword.
//we use new keyword for object construction.


//string as premitive data type
var s= "hello";
alert (typeof(s));
//string as an object
var s = new String("hello");
alert (typeof(s));

//list of built in object constructors in javascript

var obj1 = new Object(); //a new object as object
var obj2 = new String(); //a new String as object
var obj3 = new Number(); //a new number as object
var obj4 = new Boolean(); //a new boolean as object
var obj5 = new Array();   //a new array as objecct
var obj6 = new RegExp();  //a new regular expression as object
var obj7 = new Function(); //a new function as object.
var obj8 = new Date();   //a new date as object
//math() object            //a global math object




/*
Object- everything in javascript is an object
Object contains:-
1:- Properties: Data related to the object
2:- Methods: Actions to be performed with object or on its data.
Three ways to create object in js
*/

//create object using new keyword
var person = new Object(); // variable person holding an object.
person.firstName = "ranjan"; //adding properties to the variable object.
person.lastName = "singh";
person.age = 23;
person.fullName = function(){
	return (person.firstName + " " + person.lastName);
}
document.write(person.firstName + "<br>");
document.write(person.lastName + "<br>");
document.write(person.fullName() + "<br>");


//Second way of creating object is by using object constructor.
//we use function in this
function Person(fname, lname, age,){
//adding properties to the object constructor by this keyword.
this.firstname=fname; //firstName is property name and fname is value which is parameter and value will come from argument.
this.lastname=lname;
this.age=age;
this.fullname=function(){
	return (this.firstname + " " + this.lastname);
}
}
var myBrother = new Person("sumit", "singh" ,24);
var mySis = new Person("reshu", "singh", 24);
document.write(myBrother.firstname + "<br>");
document.write(myBrother.fullname() + "<br>");

document.write(mySis.firstname + "<br>");
document.write(mySis.fullname() + "<br>");

//Third way to create object using object literals
//Its easiest way to create object
//var person1 ={properties1, properties1}; basic syntax
var person1 ={

frname: "Ranjan",
ltname:"Singh",
age: 20,
flname: function(){
	return(this.frname + " " + this.ltname);
}
};
document.write(person1.frname + "<br>");
document.write(person1.flname() + "<br>");



//Objects are changble because it is accessd byy reference not by value.

var x=person;
x.firstName = "Ravi";
document.write(x.firstName + "<br>");
document.write(person.firstName +"<br>"); //here wwe can see that firstname of person object changed to ravi from ranjan.


//Deleting the property of an object

delete person.age;
alert(person.age); //output will be undefined.


//For in loop - used to loop through all the properties of object.
 var myCar={

 	name: "Honda",
 	color: "Red",
 	year: 2016
 };
 var v ="";
 for (var k in myCar){
v=v+myCar[k]
 +" "; }
 document.write(v + "<br>");

 //Nested object in javascript
var user ={

name: "ranjan",
age: 13,
size:{
	top:40,
	middle:50,
	bottom:20
}

};
alert(user.name);
alert(user.size.top);
