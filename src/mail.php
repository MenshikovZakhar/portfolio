<?php
$toWho = "zm681986@mail.ru";
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = "Name:" + $name +"\nPhone:" + $phone;
if(mail("$toWho", "$message")) {
  echo 'Отправленно';
  } else echo 'Возникли ошибки при отправке данных';

?>
