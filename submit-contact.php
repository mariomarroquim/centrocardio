<?php

$name = $_POST["name"];
$telephone = $_POST["telephone"];

$email = $_POST["email"];
if ($email == "") {
    $email = "contato@centrocardio.com.br";
}

$message = $_POST["message"];

$destiny = "contato@centrocardio.com.br";

$subject = "Nova mensagem pelo website";

$body = "Olá, tudo bom?\r\n\nSeguem os dados da mensagem:\r\n\n"
    . "Nome: "      . $name         . "\r\n"
    . "Telefone: "  . $telephone    . "\r\n"
    . "Email: "     . $email        . "\r\n"
    . "Mensagem: "  . $message      . "\r\n\n"
    . "Você pode responder a esta mensagem para se comunicar diretamente com o paciente se ele tiver informado um email.\r\n\n"
    . "Atenciosamente,\r\n\n"
    . "Website do Centrocardio\r\n"
    . "http://www.centrocardio.com.br";

if (mail($destiny, $subject, $body, "From: $email\r\nReply-To: $email\r\nReturn-Path: $email\r\n", "-f $destiny")) {
    echo "Obrigado pela mensagem!";
} else {
    echo "Algo de errado aconteceu", "Por favor, tente novamente mais tarde.";
}

die;

?>
