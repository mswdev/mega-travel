<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Email: $email \n Message: $message";
$recipient = "megatravel15@gmail.com";
$subject = $_POST['subject'];
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You! <br/> <a href='http://megatravel.org/contact.php'>Return Home</a>";
?>