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
}?>