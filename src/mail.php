<?php
$to = "zm681986@mail.ru"; // емайл получателя данных из формы
$tema = "Форма обратной связи на PHP"; // тема полученного емайла
$message = "Ваше имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$message .= "Номер телефона: ".$_POST['phone']."<br>"; //полученное из формы name=phone
$message .= "Сообщение: ".$_POST['message']."<br>"; //полученное из формы name=message
$headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
if (mail($to, $tema, $message, $headers)) {
  echo '<p class="contact__text">Сообщение отправлено!!!</p> <a href="#contact"
  onclick="location.reload(); return false;">
	<p class="contact__text-1"> Отправить новое сообщение</p>
</a>';
}
else {
  echo 'Ошибка!';
}
?>



