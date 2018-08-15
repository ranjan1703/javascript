//Regular expression are a way to describe patterns in string.
//This is powerful tool for inspecting and processing strings.
//A Regular exp is a type of object. it can be either constructed with the RegExp constructor or written as a literal value by enclosing a patter in forward slash(/) chanracters.
//var re1 = new RegExp("abc");
//var re2 = /abc/;
//Both of those regular expression objects represent thr same pattern:
//an a character followed by b followed by c.
//Some characters, such as question marks and plus signs, have special meanings in regular expression and must be preceded bt a backslash if they are meant to represent the character itself.
//var eighteenPlus =/eighteen\+/;  //forword / (slash) ends the pattern.

/*function reg(a){
var 
}*/

console.log(/abc/ .test("abcde"));
//return true
console.log (/abx/ .test("adcde"));
//return false

//A regular exp consisting of only nonspecial characters simple represents that sequence of characters. If abc accurs anywhere in the string we are testing against( not just at the start), test will return true.
console.log(/abc/ .test("hgbfdidhabcfkejlkaksjdnjkbnc"));
//retrun true

//Matching any number in set of characters between sqr bracket
console.log(/[0123456789]/ .test("in 1992"));
console.log(/["ghr"]/ .test("in abz"));
console.log(/[0-9]/ .test("in 1223"));
console.log(/[a-z]/ .test("hgjk"));
console.log(/[A-Z]/.test("ghj"));
//A number of common character groups have their own built-in shortcuts. Digits are one of them: /d means the same things as [0-9].
// \d Any digit character
// \w an alphanumeric charater("word character")
// \s any whitespace character (space, tab, newline, and similar)
// \D A character that is nat a digit
// \W A nonalphanumeric character
// . any character except for newline


//matching date and time format like 01-30-2018 17:20.
var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2018 15:20"));
console.log(dateTime.test("01-jan-2018 15:20"));
var dateCheck =/\d\d-\w\w\w\-\d\d\d\d \d\d:\d\d/;
console.log(dateCheck.test("01-jan-2018 15:20"));

//To invert a set of characters i.e to express that we want to match any character except the ones in the set
// we can do it using ^ (caret) sign.
var notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
var yesBinary =/[^01]/;
console.log(yesBinary.test("dgvgshghjklal"));

//Repeating parts of a pattern 
//we now know how match a single digit.
//what if we want to match a whole number- a sequence of one or more degits?
//when we put a plus sign(+) after somethinf in areg exp,
//it indicates that the elementt may be repeated more than once./
//Thus, /\d+/ matches one or more degit characters.
console.log(/'\d+'/.test("'123'"));
//return true
console.log(/'\d+'/.test("''"));
//retun false
console.log(/'\d*'/.test("'12'"));
//return true
console.log(/'\d*'/.test("''"));//* allows the pattern to match zero times. Something with a star after it never prevents a pattern from matching- it'll just match zero instances it it can't find any suitable text to match.

//return true.

// /x*/ 	Zero or more occurrences
/*/x+/	One or more occurrences of the pattern x
/x+?/	One or more occurrences, nongreedy

/x?/	Zero or one occurrence*/

var ranjan = /rank?jan/;
console.log(ranjan.test("rankjan"));// a ? mark makes a part of a pettern optional, means it may occur zero or one time. in this exmple k char. is allowed to occur, but the pattern also matches when it is missing.
//return true
console.log(ranjan.test("ranjan"));//here k is missiing but still returning true
// this also return true


//to indicate that a pattern should occur a precise number of times, use braces. Putting {3} after an element, for example, requires it to occur exactly four times. 
//it is also possible to specify a range this way:{2,4} means the element must occur at least twice and at most four times.

//now take dateTime example to implement this.]
var dateTime1= /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime1.test("12-30-1990 8:45"));
//return true

//we can also specify open-ended ranges when using braces by omitting the number after the comma. so, {5,}
//means five or more times.


//GROUPING SUBEXPRESSIONS

//To use an operator like * or + on more than one element at a time,
//we have to use paentheses counts as a single element as far as the operators following it are conserned.
var cartoonCrying =/boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
//The first and second + characters apply only to the second o in boo and hoo, resp.
//The third + applies to the whole group (hoo+),matching one or more sequences like that.
//The i at the end f expression in the example makes this reg exp case insensitive, allowing it to match the uppercase B in the input string, even though the pattern is itself all lowercase.


//MATCHES AND GROUPS
//other then test method we also have exec method that will return null if no match was found and return an object with information about the match otherwise.
var match =/\d+/.exec("one two 5 8");
console.log(match);
//it return the index property that tell us where in the string the successful match begins
/*When the regular expression contains subexpressions grouped with parentheses, the text that matched those groups will also show up in the array. The whole match is always the first element. The next element is the part matched by the first group (the one whose opening parenthesis comes first in the expression), then the second group, and so on.*/
var quotedText = /'([^']*)'/;
console.log(quotedText.exec("he said 'hello'"));
// ["'hello'", "hello"]

/*
When a group does not end up being matched at all (for example, when followed by a question mark), its position in the output array will hold undefined. 
Similarly, when a group is matched multiple times, only the last match ends up in the array.
*/
console.log(/bad(ly)?/ .exec("bad"));
// return undefined
console.log(/(\d)+/ .exec("123"));
//return ["123" ,"3"]


/*
Groups can be useful for extracting parts of a string. 
If we don’t just want to verify whether a string contains a date but also extract it and construct an object that represents it, we can wrap parentheses around the digit patterns and directly pick the date out of the result of exec.
*/

//THE DATE CLASS
function getDate(string){
	var [_, month, day, year]=/(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);//The _ (underscore) binding is ignored and used only to skip the full match element in the array returned by exec.
	return new Date(year, month-1, day);
}
console.log(getDate("1-30-2003"));


//WORD AND STRING BOUNDARIES
//we can use the marker \b. A word boundry can be the start or end of the string or any point in the string that has a wordcharacter (as in \w) on one side and a nonword character on the other.
console.log(/cat/.test("concatenate"));
//return true
console.log(/\bcat\b/.test("concatenate"));
//return false
/*
Note that a boundary marker doesn’t match an actual character. It just enforces that the regular expression matches only when a certain condition holds at the place where it appears in the pattern.
*/


//CHOICE PATTERNS

/*
Say we want to know whether a piece of text contains not only a number but a number followed by one of the words pig, cow, or chicken, or any of their plural forms.
We could write three regular expressions and test them in turn, but there is a nicer way. The pipe character (|) denotes a choice between the pattern to its left and the pattern to its right. 

*/
var animalCount =/\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
//return true
console.log(animalCount.test("15 pigchickens"));
//return false


//The Replace Method

/*
String values have a replace method that can be used to replace part of the string with another string.

*/
console.log("papa" .replace("p", "m"));
//return mapa

/*
The first argument can also be a regular expression, in which case the first match of the regular expression is replaced. When a g option (for global) is added to the regular expression, all matches in the string will be replaced, not just the first.

*/
console.log("ranjan" .replace(/[au]/, "o"));
// return ronjan
console.log("ranjan" .replace(/[au]/g,"o"));
//return ronjon

/*
The real power of using regular expressions with replace comes from the fact that we can refer to matched groups in the replacement string. For example, say we have a big string containing the names of people, one name per line, in the format Lastname, Firstname. If we want to swap these names and remove the comma to get a Firstname Lastname format, we can use the following code:

*/
console.log("Ranjan, singh \n Souvik, ray\n Ravi, Yadav".replace(/(\w+), (\w+)/g, "$2 $1"));

/*
The $1 and $2 in the replacement string refer to the parenthesized groups in the pattern. $1 is replaced by the text that matched against the first group, $2 by the second, and so on, up to $9. The whole match can be referred to with $&.

*/

//PASSING FUnCTION rather than string as the second argument to replace.
var s=" this is my house";
console.log(s.replace(/\b(is|my)\b/g, str=>str.toUpperCase()));
//return- this IS MY house


//example on this
var stock = "1 lemon, 2 cabbages, and 102 eggs";
function minusOne(match, amount, unit){
	amount = Number(amount)-1;
	if (amount==1) {
		unit==unit.slice(0,unit.length-1);

	}else if(amount==0){
		amount="no";
	}
	return amount + " " +unit;

	}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

//GREED
/*
It is possible to use replace to write a function that removes all comments from a piece of JavaScript code.

*/
function stripComments(code){
return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1+ /* 2 */3"));

//Dynamically creating RegExp objects

/*
There are cases where we might not know the exact pattern we need to match against when we are writing our code. Say we want to look for the user’s name in a piece of text and enclose it in underscore characters to make it stand out. Since we will know the name only once the program is actually running, we can’t use the slash-based notation.

But we can build up a string and use the RegExp constructor on that. 
*/
var name ="harry";
var text ="Harry is a suspicious character.";
var regexp  =new RegExp("\\b("+ name +")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

//The search method
