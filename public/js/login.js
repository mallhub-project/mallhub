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
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    
                    //salva na sessão storage browser
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.TELEFONE_USUARIO = json.telefone;
                    sessionStorage.ID_USUARIO = json.id;
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        didOpen: () => {  
                            setInterval(() => {
                                window.location.href = '../dashboard/dashboard.html'
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