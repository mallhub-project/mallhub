function entrar() {
    const email = inputEmail.value
    const password = inputSenha.value

    if (email && password && email.indexOf('@') > 1 && email.indexOf('.') > 1) {
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                senhaServer: password
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(json => {
                    //salva na sessão storage browser
                    sessionStorage.ID_USUARIO = json.id_usuario;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.CPF_USUARIO = json.cpf;
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.TELEFONE_USUARIO = json.telefone;
                    sessionStorage.CARGO_USUARIO = json.cargo;
                    sessionStorage.ID_SHOPPING = json.fk_shopping;
                    sessionStorage.NOME_FANTASIA = json.nome_fantasia;
                    sessionStorage.RAZAO_SOCIAL = json.razao_social;
                    sessionStorage.CEP = json.cep;
                    sessionStorage.CIDADE = json.cidade;
                    sessionStorage.ESTADO = json.estado;
                    sessionStorage.LOGRADOURO = json.logradouro;
                    sessionStorage.NUMERO_ENDERECO = json.numero;
                    sessionStorage.CNPJ = json.cnpj

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        didOpen: () => {  
                            setInterval(() => {
                                window.location.href = 'dashboard.html'
                            }, 1500);
                        }
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'Logado com sucesso!'
                    })
                });
            } else {
                console.log("Houve um erro ao tentar realizar o login!");
                labelSpanValidar.style.display = 'flex'
                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })
    }
    validationInputs(email, password)
}

function validationInputs(email, password) {
    if (!email) {
        inputEmail.style.border = '1px solid red'
        inputEmail.style.color = 'red'
        labelSpanEtapa1.style.display = 'flex'
    }

    if (email.indexOf('@') < 1 && email.indexOf('.') < 1) {
        inputEmail.style.border = '1px solid red'
        inputEmail.style.color = 'red'
        labelEmailSpan.style.display = 'flex'
    }

    if (!password) {
        inputSenha.style.border = '1px solid red'
        inputSenha.style.color = 'red'
        labelSpanEtapa1.style.display = 'flex'
    }
}