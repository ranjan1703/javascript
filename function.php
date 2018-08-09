
<!-- php function -->
<?php
function myfun(){
	for ($i=0; $i <=10 ; $i++) { 
		if ($i %2==0) {
		echo $i. "even <br>";
		# code...
	}
	else{
		echo $i. "Not even <br>";
	}
	}
}
myfun();
?>
<!-- php function with parameter -->

<!-- syntex
	function myfun(parameter1, parameter2){
	......code block...
	}
	myfun(value1,value2);  //calling function with value.
	we will see example

 -->
 <?php
 echo "<br>";
 function myfun1($num){
 	if($num%2==0){
 		echo $num. " is even";
 	}
 	else{
 		echo $num. " is odd";
 	}
 }
 
 myfun1(11);
 ?>