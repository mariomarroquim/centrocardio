$name = $_POST["name"];
$telephone = $_POST["telephone"];
$email = $_POST["email"];
$date = $_POST["date"];
$doctor = $_POST["doctor"];

$destiny = "agendamento@centrocardio.com.br";

$subject = "Novo agendamento pelo website";

$body = "Olá, seguem os dados do paciente para contato e confirmação do agendamento:\r\n\n"
    . "Nome: "      . $name         . "\r\n\n"
    . "Telefone: "  . $telephone    . "\r\n\n"
    . "Email: "     . $Email        . "\r\n\n"
    . "Data: "      . $date         . "\r\n\n"
    . "Médico: "    . $doctor       . "\r\n\n"
    . "Você pode responder esta mensagem para se comunicar diretamente com o paciente.\r\n\n"
    . "Atenciosamente,\r\n\n"
    . "Website do Centrocardio\r\n\n"
    . "http://www.centrocardio.com.br"

if (mail($destiny, $subject, $body, "From: $email\r\nReply-To: $email\r\nReturn-Path: $email\r\n", "-f $address")) {
    http_response_code(200);
    echo "Obrigado! Isto não é uma confirmação de agendamento. Aguarde, pois em breve entraremos em contato com você para confirmar o agendamento.";
} else {
    http_response_code(500);
    echo "Algo de errado aconteceu", "Por favor, tente novamente mais tarde.";
}

die;
