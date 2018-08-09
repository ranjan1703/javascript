<?php
$a = 10;
$b = 30;
$c = 20;
if (($a>$b) && ($a>$c)) {
	echo $a;
	# code...
}
elseif (($b>$c) &&($b>$a)) {
	echo $b;
	# code...
}
else{
	echo $c;

}
echo "<br>";
?>

<?php
$grade = "b";
switch ($grade) {
	case 'a':
		echo "student with grade a";
		break;
	case 'b':
	echo "Student with grade b";
		# code...
		break;
	default:
		# code...
		break;
}
echo "<br>"?>

<!-- while loop -->

<?php 
 $a = 1;
 while ($a<=5) {
 	echo $a;
 	$a++;
 	}
 	echo "<br>";
?>

<!-- do while -->
<?php 
$a=12;
do{
	echo $a;
	$a++;
}while ($a<=10);
echo "<br>";
?>

<!-- find even or odd -->
<?php
for($a=0; $a<10; $a++) {
 
 if($a % 2 == 0) {
 	echo $a. "is even <br>";
 	}
 	else{
 		echo $a. "is odd <br>";
 	}
 }
?>
<!-- <?php
for ($i=1; $i<=100; $i=$i+2)
	
{
  	  
echo $i."is odd <br>";
	
} 
 
?> -->
<?php
echo "break <br>";
for ($i=1; $i <= 10; $i++) { 
	if ($i==5) {
		break;
		
	}
	echo $i. "<br>";

}?>

<?php
echo "continue <br>";
for ($i=1; $i <= 10; $i++) { 
	if ($i==5) {
		continue;
		
	}
	echo $i. "<br>";
}?>