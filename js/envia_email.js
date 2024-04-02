var inp_nome = document.querySelector('#cont-nome');
var inp_email = document.querySelector('#cont-email');
var inp_menssagem = document.querySelector('#cont-messagem');
var bt_submit = document.querySelector('#btn-enviar');



bt_submit.onclick = function () {
    if (inp_nome.value == '' || inp_email.value == "" || inp_menssagem.value == '') {
        alert('Por favor Preencha todos os campos.')
    } else {
        $.ajax({
            url: "https://formsubmit.co/ajax/petspot.adote@gmail.com",
            method: "POST",
            data: {
                name: inp_nome.value,
                email: inp_email.value,
                message: inp_menssagem.value
            },
            dataType: "json",
            success: (resposta) => {
                alert('Email enviado')
                inp_nome.value = "";
                inp_email.value = "";
                inp_menssagem.value = "";
            }
        });
    }
}