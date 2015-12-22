<?php

$name = $_POST["name"];
$age = $_POST["#age"];
$telephone = $_POST["#telephone"];
$scolarship = $_POST["#scolarship"];
$academic_formation = $_POST["#academic-formation"];
$professional_experience = $_POST["#professional-experience"];
$professional_formation = $_POST["#professional-formation"];

$email = $POST["#email"];
if ($email == "") {
    $email = "adm@centrocardio.com.br";
}

$destiny = "adm@centrocardio.com.br";

$subject = "Novo currículo pelo website";

$body = "Olá, tudo bom?\r\n\nSeguem os dados do currículo:\r\n\n"
    . "Nome: "                     . $name                    . "\r\n"
    . "Idade: "                    . $age                     . "\r\n"
    . "Telefone: "                 . $telephone               . "\r\n"
    . "Email: "                    . $email                   . "\r\n"
    . "Escolaridade: "             . $scolarship              . "\r\n"
    . "Formação Acadêmica: "       . $academic_formation      . "\r\n"
    . "Experiência Profissional: " . $professional_experience . "\r\n"
    . "Formação Profissional: "    . $professional_formation  . "\r\n\n"
    . "Você pode responder a esta mensagem para se comunicar diretamente com o interessado se ele tiver informado um email.\r\n\n"
    . "Atenciosamente,\r\n\n"
    . "Website do Centrocardio\r\n"
    . "http://www.centrocardio.com.br";

if (mail($destiny, $subject, $body, "From: $email\r\nReply-To: $email\r\nReturn-Path: $email\r\n", "-f $destiny")) {
    echo "Obrigado pelo interesse!";
} else {
    echo "Algo de errado aconteceu", "Por favor, tente novamente mais tarde.";
}

die;

?>
