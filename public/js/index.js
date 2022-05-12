function sendEmail() {
    var nome = nomeMessage.value
    var email = emailMessage.value
    var mensagem = mensagemSend.value

    if (!nome.length) {
        nomeMessage.style.border = '1px solid red'
        span_warning.style.display = 'block'
    }

    if (!email.length || email.indexOf('@') == -1) {
        emailMessage.style.border = '1px solid red'
        span_warning.style.display = 'block'
        span_warning_email.style.display = 'block'
    }

    if (!mensagem.length) {
        mensagemSend.style.border = '1px solid red'
        span_warning.style.display = 'block'
    }
}