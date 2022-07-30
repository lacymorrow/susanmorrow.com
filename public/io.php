<?php
// Moved to /Users/tmorrow/repo/fly5/src/utils/sendEmail.ts

if (isset($_REQUEST['email']))
{

	$to = htmlspecialchars( $_REQUEST['email'] );
	$name = htmlspecialchars( $_REQUEST['name'] );
	$message = htmlspecialchars( $_REQUEST['message'] );
	$host=$_SERVER['SERVER_NAME'];
	$ip=$_SERVER['SERVER_ADDR'];
	$from="susan@susanmorrow.us";
	$subject="SusanMorrow.us Inquiry: $name";
	$message="$message\r\n$name\r\n$to\r\n\r\nThis is message from susanmorrow.us ($host). It originated from the IP address $ip. Contact me@lacymorrow.com if you receive this in error.\r\n\r\n";
	$headers="From: $from" . "\r\n" . "Reply-To: $to" . "\r\n" . "X-Mailer: PHP/" . phpversion();

	// Check email validity
	$regex = '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/';
	if (!preg_match($regex, $to)) {
		echo "{error: '$to is not a valid email address. Please check the entry and try again.'}";
	} else {
		// mail("gojukebox@gmail.com",$subject,$message,$headers);
		$success=mail("morrowsus@gmail.com",$subject,$message,$headers);
		if($success) {
			echo "{success: 'The email was sent successfully'}";
		}
		else {
			echo "{error: 'An error occurred, and the email was not sent. Check your domains' error logs and mail log for more info.'}";
		}
	}

} else if(isset($_REQUEST['fileurl'])) {
	$file = htmlspecialchars($_REQUEST['fileurl']);
	$subject = "SusanMorrow.us File Uploaded";
	$message = "A file has been uploaded to your server ($file) \r\n\r\nContact me@lacymorrow.com if you receive this in error.\r\n\r\n";
	$headers = "From: susan@susanmorrow.us" . "\r\n" . "Reply-To: susan@susanmorrow.us" . "\r\n" . "X-Mailer: PHP/" . phpversion();
	mail("gojukebox@gmail.com",$subject,$message,$headers);
	echo "{success: 'email sent'}";
}
?>
