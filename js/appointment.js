var weekdays = new Array(7);

weekdays[0] = "Domingo";
weekdays[1] = "Segunda";
weekdays[2] = "Terça";
weekdays[3] = "Quarta";
weekdays[4] = "Quinta";
weekdays[5] = "Sexta";
weekdays[6] = "Sábado";

var doctorsAvailabilty = {
    "Dr. Alcino Pereira de Sá Filho": [1,2,3,4],
    "Dr. Alexandre Adad Alencar": [1,2,3,4,5],
    "Dr. Eduardo Antônio Ayremoraes Batista": [1,2,3,4],
    "Dr. Emidio Fernandes de Sousa Filho": [1,2,3,4,5,6],
    "Dr. Francisco das Chagas Eulálio Martins Júnior": [1,2,3,4,6],
    "Dr. Irapuá Ferreira Ricarte": [1,3],
    "Dr. José Aldemir Teixeira Nunes Júnior": [1,2,3,4,5,6],
    "Dr. Jonatas Melo Neto": [1,2,3,4,5,6],
    "Dr. José Carlos Formiga Lourenço de Sousa": [1,2,3,4],
    "Dr. Leandro Cardoso Fernandes": [1,2,3,4],
    "Dr. Lucas Teixeira Dias": [1,2,3,5],
    "Dr. Marcelo da Rocha Veloso": [1,2,3,4],
    "Dr. Marcos Roberto Queiroz França": [4],
    "Dr. Nilo Luiz de Macedo Filho": [1,2,5],
    "Dr. Orlando Irapuan Morais": [1,3,4,5],
    "Dr. Paulo Márcio Sousa Nunes": [1,2,3,4],
    "Dr. Récio Cronemberger Mangueira": [1,2,3,4,5],
    "Dr. Robert Eudes Nunes de Sousa Segundo": [5]
}

function submitAppointment(){
    var name = $("#name").val();
    var telephone = $("#telephone").val();
    var email = $("#email").val();
    var date = $("#date").val();
    var birth = $("#birth").val();
    var doctor = $("#doctor").val();

    if (name == "" || (telephone == "" && email == "")) {
        sweetAlert("Importante", "Preencha ao menos o nome e um contato (telefone, email).", "error");
        return false;
    }

    if(email != "" && !validateEmail(email)){
        sweetAlert("Importante", "Preencha o agendamento com um email válido.", "error");
        return false;
    }

    if(birth != ""){
        var birthDate = $("#birth").datepicker("getDate");

        if(birthDate > new Date()){
            sweetAlert("Importante", "Preencha o agendamento com um nascimento válido.", "error");
            return false;
        }
    }

    if(date != ""){
        var yesterday = new Date().setDate(new Date().getDate() - 1);
        var appointmentDate = $("#date").datepicker("getDate");

        if(appointmentDate <= yesterday){
            sweetAlert("Importante", "Preencha o agendamento com uma data válida.", "error");
            return false;
        }
        else {
            if($("#doctor").val() != "") {
                daysAvailable = doctorsAvailabilty[$("#doctor").val()];

                if($.inArray(appointmentDate.getUTCDay(), daysAvailable) < 0){
                    var message = "O médico escolhido só atende nos seguintes dias:<br/><br/>";

                    message += daysAvailable.map(function(obj){
                        return "<b>" + weekdays[obj] + "</b>"
                    }).join(", ");

                    sweetAlert("Importante", message, "error");
                    return false;
                }
            }
        }
    }

    $.ajax({
       type: "POST",
       url: "submit-appointment.php",
       async: true,
       data: {"name" : name, "telephone" : telephone, "email" : email, "date" : date, "birth" : birth, "doctor" : doctor},

       beforeSend: function() {
            $("#appointment-submit").val("Aguarde...");
       },

       error: function(reponse) {
            $("#appointment-submit").val("Enviar");
            sweetAlert("Algo de errado aconteceu", "Por favor, tente novamente mais tarde.", "error");
       },

       success: function(response) {
            $("#form-appointment").resetForm();
            $("#appointment-submit").val("Enviar");
            sweetAlert("Obrigado!", "<b>Isto <u>não</u> é uma confirmação de agendamento</b>.<br/><br/>Aguarde, pois em breve entraremos em contato com você para confirmar o agendamento.", "success");
       }
    });

    return true;
}
