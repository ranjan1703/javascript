//There are two way to define string in js
//as we know string is premitive type and can also be defined as object

var ss = new String("This is India");
console.log(ss);
//other way
var s = "India is great";
console.log(s);

//add special characters into string
var myString = "India will be \"always\" great";
console.log(myString);

//length of string
console.log(myString.length);
//return length=28
console.log(myString.indexOf("will"));//find index
//return 6
console.log(myString.substring(6,12));//sub string
//return will b;
console.log(myString.replace("great" ,"greater"));
//return India will be "always" greater.
console.log(myString.toUpperCase());
//return INDIA WILL BE "ALWAYS" GREAT
console.log(myString.charAt(2));
//return d

/*
########## REVERSE STRING -Three way ##########

*/
//Problem is to reverse the given string
//we may need to turn the string into an array before we can reverse it.
//but result must be string
function reverseString(str){
	document.write("Given  Input - " + str +"<br>");
	//step 1. use the split() method to return a new array
	var splitString=str.split("");
	//document.write(splitString + "<br> ");//return["o","l","l","e","h" ]
	//step 2. use the reverse() method to reverse the new created array
	var reverseArray =splitString.reverse();
	//document.write(reverseArray +"<br>");//["o", "l", "l","e","h"]
	//step 3. use join() method to join all elements of the array into a string
	var joinArray=reverseArray.join("");
	document.write("Result after reverse - " + joinArray + "<br>");//return olleh
}
reverseString("hello");

/*
USING "FOR LOOP"
*/
function reverseStringFor(str){
	var newString = ""; //create variable to store new returned string
	for(var i=str.length-1; i>=0; i--){
/* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
       newString = newString + str[i];

        /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/
    }
    document.write("reversed string " + newString + "<br>");
}
reverseStringFor("hello");

/*
reverse string with recursion
*/

/* 
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls
Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"
Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately
5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
*/


function reverseStringRecu(str){
	if(str === "")
		return "";
else
	document.write(reverseStringRecu(str.substr(1)) + "<br>" + str.charAt(0));
	
}
reverseStringRecu("ranjan");
/*function reverseStringRecu(str) {
  if (str === "")
    return "";
  else
    document.write(reverseStringRecu(str.substr(1)) + str.charAt(0));
}
reverseStringRecu("hello");
*/



function reverseStringTer(str) {
  console.log((str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0));
}
reverseStringTer("hello");

/*
Repeat a string
*/
//using while loop
//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(string, times){
	var repeatedString="";
	while(times>0){ // As long as times is greater than 0, the statement is executed
		repeatedString=repeatedString+string;
		times--;
	}
	document.write("Repeated string= " + repeatedString + "<br>");
	/* While loop logic
                      Condition       T/F       repeatedString += string      repeatedString        times
    First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
    Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
    Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
    Fourth iteration   (0 > 0)        false
    }
  */
}
repeatStringNumTimes("abc",3);


/*
FIND FACTORIAL OF A NUMBER
*/
/* with Recursion*/

/*function factorialize(num) {
  if (num < 0) 
        return -1;
  
  else if
  	 (num == 0) 
      return 1;
  
  else {
      document.write(num * factorialize(num - 1));
  }

}
factorialize(5);*/

function factorialize(num){
	var result1 =num;
	if(num===0 || num ===1)
		return 1;
	while(num>1){
		num--; // decrementation by 1 at each iteration
		result1=result1*num;
}
document.write(result1 +"<br>");
 /* 
                    num           num--      var result      result *= num         
    1st iteration:   5             4            5             20 = 5 * 4      
    2nd iteration:   4             3           20             60 = 20 * 3
    3rd iteration:   3             2           60            120 = 60 * 2
    4th iteration:   2             1          120            120 = 120 * 1
    5th iteration:   1             0          120
    End of the WHILE loop 
    */
}
factorialize(5);


/*
using FOR LOOP
*/

function factorializeFor(num){
	if(num===0 || num===1)
		return 1;
		for (var i=num-1; i>=1; i--){// We store the value of num at each iteration
			num = num *i;
		}
		document.write(num + "<br>");
		   /* 
                    num      var i = num - 1       num *= i         i--       i >= 1?
    1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
    2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
    3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
    4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
    5th iteration: 120               0                120
    End of the FOR loop 
    */
}
factorializeFor(5);

/*
Palindromes- A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.

*/
function palindrome(str){
	var re = /[\W_]/g;
	var lowRegstr =str.toLowerCase().replace(re, "");
	var reversestr = lowRegstr.split('').reverse().join('');
	//return s= (reversestr === lowRegstr);
	document.write(reversestr === lowRegstr);
}
palindrome("A man, a plan, a canal. Panama")



