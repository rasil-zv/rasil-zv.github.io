<?php 

$name = trim($_POST['user_name']);
$phone = trim($_POST['user_phone']);


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																	// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'poletkondora@mail.ru';                 // Наш логин почты
$mail->Password = '528180rr';                           // Наш пароль почты
$mail->SMTPSecure = 'ssl';                 // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('poletkondora@mail.ru', 'Компания OOO "ГЕОТЕСТЕР"');   // От кого письмо 
$mail->addAddress('zaj-rasil@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на обратный звонок с сайта"';
$mail->Body    = '
	Пользователь оставил след данные: <br> 
	Имя: ' . $name . ' <br>
	Телефон: ' . $phone .'';
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>