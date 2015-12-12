<?php

$name = $_POST["name"];
$telephone = $_POST["telephone"];
$email = $_POST["email"];
$date = $_POST["date"];
$doctor = $_POST["doctor"];

$destiny = "agendamento@centrocardio.com.br";

$subject = "Novo agendamento pelo website";

$body = "Olá, tudo bom?\r\n\nSeguem os dados do paciente para contato e confirmação do agendamento:\r\n\n"
    . "Nome: "      . $name         . "\r\n"
    . "Telefone: "  . $telephone    . "\r\n"
    . "Email: "     . $email        . "\r\n"
    . "Data: "      . $date         . "\r\n"
    . "Médico: "    . $doctor       . "\r\n\n"
    . "Você pode responder a esta mensagem para se comunicar diretamente com o paciente.\r\n\n"
    . "Atenciosamente,\r\n\n"
    . "Website do Centrocardio\r\n"
    . "http://www.centrocardio.com.br";

if (mail($destiny, $subject, $body, "From: $email\r\nReply-To: $email\r\nReturn-Path: $email\r\n", "-f $destiny")) {
    echo "Obrigado! Isto não é uma confirmação de agendamento. Aguarde, pois em breve entraremos em contato com você para confirmar o agendamento.";
} else {
    echo "Algo de errado aconteceu", "Por favor, tente novamente mais tarde.";
}

die;

?>
