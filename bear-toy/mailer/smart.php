<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$bear = $_POST['bear'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'poletkondora@mail.ru';                 // Наш логин
$mail->Password = '528180rr';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('poletkondora@mail.ru', 'Bear-toy - интернет-магазин плюшевых мишек');   // От кого письмо 
$mail->addAddress('zaj-rasil@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта "Bear-toy"';
$mail->Body    = '
	<i>Пользователь оставил след данные:</i> <hr> 
	<b>Имя:</b>  ' . $name . ' <br>
	<b>Телефон:</b>  ' . $phone . ' <br>
	<b>E-mail:</b>  ' . $email . ' <br>
	<b>Описание мишки:</b>  ' . $bear .'';
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>