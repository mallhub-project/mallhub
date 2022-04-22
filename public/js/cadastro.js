'use strict';

var etapa = 0
var isClickedButton = false

var emailExistente = false
var cnpjExistente = false

function etapaIncrement() {
    const cnpj = inputCnpj.value;
    const fantasyName = inputfantasia.value;
    const razaoSocial = inputRazaoSocial.value;
    const nome = inputNome.value;
    const email = inputEmail.value;
    const password = inputSenha.value;
    const confirmPassword = inputConfirmarSenha.value;
    const tellphone = inputTel.value;
    const cidade = inputcidade.value;
    const state = inputestado.value;
    const logradouro = inputlogradouro.value;
    const number = inputnumero.value;
    const cep = inputcep.value;

    isClickedButton = true
    if ((etapa == 0) && (cnpj.length > 11) && (cnpj.indexOf('000') > 1) && (cnpjExistente == false)) {
        isClickedButton = false
        etapa++
        etapa0.style.display = 'none'
        etapa1.style.display = 'flex'
    }

    if ((etapa == 1) && (razaoSocial.length) && (fantasyName.length)) {
        etapa++
        etapa0.style.display = 'none'
        etapa1.style.display = 'none'
        etapa2.style.display = 'flex'
        isClickedButton = false
    }

    if (etapa == 2 && cep.length && logradouro.length && number.length && cidade.length && state.length) {
        etapa++
        etapa0.style.display = 'none'
        etapa1.style.display = 'none'
        etapa2.style.display = 'none'
        etapa3.style.display = 'flex'
        isClickedButton = false
    }

    if (etapa == 3 && nome.length) {
        etapa++
        etapa0.style.display = 'none'
        etapa1.style.display = 'none'
        etapa2.style.display = 'none'
        etapa3.style.display = 'none'
        etapa4.style.display = 'flex'
        isClickedButton = false
    }

    if (etapa == 4 &&  email &&  password &&  confirmPassword && (email.indexOf('@') > 1) && (email.indexOf('.') > 1) && (password == confirmPassword) && (password.length >= 8) && (emailExistente == false)) {
        etapa++
        etapa0.style.display = 'none'
        etapa1.style.display = 'none'
        etapa2.style.display = 'none'
        etapa3.style.display = 'none'
        etapa4.style.display = 'none'
        etapa5.style.display = 'flex'
        isClickedButton = false
    }

    //colorir botões que não estão preenchidos
    validationInputs(cnpj, fantasyName, razaoSocial, nome,  email, password, confirmPassword, tellphone, cep, cidade, state, logradouro, number);
}

function validationInputs(cnpj, fantasyName, razaoSocial, nome,  email, password,
    confirmPassword, tellphone, cep, cidade, state, logradouro, number) {

    if (etapa == 0 && !cnpj.length && isClickedButton) {
        inputCnpj.style.border = '1px solid red';
        inputCnpj.style.color = 'red';
        labelSpanEtapa0.style.display = 'flex';
    }

    if (etapa == 0 && (cnpj.length < 11) || (cnpj.indexOf('000') < 1)) {
        inputCnpj.style.border = '1px solid red';
        inputCnpj.style.color = 'red';
        cnpjInvalidoSpan.style.display = 'flex'
    }

    if (etapa == 0 && cnpjExistente) {
        validarcnpjSpan.style.display = 'flex'
    }

    if (etapa == 1 && !fantasyName && isClickedButton) {
        inputfantasia.style.border = '1px solid red';
        inputfantasia.style.color = 'red';
        labelSpanEtapa1.style.display = 'flex';
    }

    if (etapa == 1 && !razaoSocial && isClickedButton) {
        inputRazaoSocial.style.border = '1px solid red';
        inputRazaoSocial.style.color = 'red';
        labelSpanEtapa1.style.display = 'flex';
    }

    if (etapa == 2 && !cep && isClickedButton) {
        inputcep.style.border = '1px solid red';
        inputcep.style.color = 'red';
        labelSpanEtapa2.style.display = 'flex';
    }

    if (etapa == 2 && !cidade && isClickedButton) {
        inputcidade.style.border = '1px solid red';
        inputcidade.style.color = 'red';
        labelSpanEtapa2.style.display = 'flex';
    }

    if (etapa == 2 && !state && isClickedButton) {
        inputestado.style.border = '1px solid red';
        inputestado.style.color = 'red';
        labelSpanEtapa2.style.display = 'flex';
    }

    if (etapa == 2 && !logradouro && isClickedButton) {
        inputlogradouro.style.border = '1px solid red';
        inputlogradouro.style.color = 'red';
        labelSpanEtapa2.style.display = 'flex';
    }

    if (etapa == 2 && !number && isClickedButton) {
        inputnumero.style.border = '1px solid red';
        inputnumero.style.color = 'red';
        labelSpanEtapa2.style.display = 'flex';
    }

    if (etapa == 3 && !nome && isClickedButton) {
        inputNome.style.border = '1px solid red';
        inputNome.style.color = 'red';
        labelSpanEtapa3.style.display = 'flex';
    }

    if (etapa == 4 && !email && isClickedButton) {
        inputEmail.style.border = '1px solid red';
        inputEmail.style.color = 'red';
        labelSpanEtapa4.style.display = 'flex';
    }

    if (etapa == 4 && !password && isClickedButton) {
        inputSenha4.style.border = '1px solid red';
        inputSenha.style.color = 'red';
        labelSpanEtapa4.style.display = 'flex';
    }

    if (etapa == 4 && !confirmPassword && isClickedButton) {
        inputConfirmarSenha.style.border = '1px solid red';
        inputConfirmarSenha.style.color = 'red';
        labelSpanEtapa4.style.display = 'flex';
    }

    if (etapa == 4 && password != confirmPassword && isClickedButton) {
        inputConfirmarSenha.style.border = '1px solid red';
        inputConfirmarSenha.style.color = 'red';
        labelSpanSenha.style.display = 'flex';
    }

    if (etapa == 4 && password.length < 8 && isClickedButton) {
        inputSenha.style.border = '1px solid red';
        inputSenha.style.color = 'red';
        labelSpanQtdsenha.style.display = 'flex';
    }

    if (etapa == 4 && email.indexOf('@') < 1 && email.indexOf('.') < 1 && isClickedButton) {
        inputEmail.style.border = '1px solid red';
        inputEmail.style.color = 'red';
        labelSpanEmail.style.display = 'flex';
    }

    if (etapa == 4 && emailExistente) {
        validarEmailSpan.style.display = 'flex'
    }

    if (etapa == 5 && !tellphone && isClickedButton) {
        inputTel.style.border = '1px solid red';
        inputTel.style.color = 'red';
        labelSpanEtapa5.style.display = 'flex'
    }

    if (etapa == 5 && tellphone.length < 9 && isClickedButton) {
        inputTel.style.border = '1px solid red';
        inputTel.style.color = 'red';
        validaTelefone.style.display = 'flex'
    }
}

function cadastrar() {
    const cnpj = inputCnpj.value;
    const fantasyName = inputfantasia.value;
    const razaoSocial = inputRazaoSocial.value;
    const nome = inputNome.value;
    const email = inputEmail.value;
    const password = inputSenha.value;
    const confirmPassword = inputConfirmarSenha.value;
    const tellphone = inputTel.value;
    const cidade = inputcidade.value;
    const state = inputestado.value;
    const logradouro = inputlogradouro.value;
    const number = inputnumero.value;
    const cep = inputcep.value;

    if (nome && cnpj && fantasyName && razaoSocial && email && password && confirmPassword
        && tellphone && cep && cidade && state && logradouro && number && (password == confirmPassword) && tellphone.length >= 9) {

        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: nome,
                cnpjServer: cnpj,
                fantasyNameServer: fantasyName,
                razaoSocialServer: razaoSocial,
                emailServer: email,
                passwordServer: password,
                tellphoneServer: tellphone,
                cepServer: cep,
                cidadeServer: cidade,
                stateServer: state,
                logradouroServer: logradouro,
                numberServer: number,
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: () => {
                        setInterval(() => {
                            window.location.href = 'login.html'
                        }, 1500);
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'cadastrado com sucesso!'
                })
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }
}

function limpa_formulário_cep() {

    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {

        document.getElementById('inputcidade').value = (conteudo.localidade);
        document.getElementById('inputestado').value = (conteudo.uf);
        document.getElementById('inputlogradouro').value = (conteudo.logradouro);
    }
    else {

        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    var cep = valor.replace(/\D/g, '');

    if (cep != "") {

        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {

            document.getElementById('inputcidade').value = "...";
            document.getElementById('inputestado').value = "...";
            document.getElementById('inputlogradouro').value = "...";

            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        }
        else {

            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    }
    else {

        limpa_formulário_cep();
    }
};

function validarEmail() {
    const email = inputEmail.value
    console.log('To chamando e passando o email: ', email)

    if ((email) && (email.indexOf('@') > 1) && (email.indexOf('.') > 1)) {
        fetch("/usuarios/validaremail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email
            })
        }).then(function (resposta) {
            if (!resposta.ok) {
                resposta.json().then(json => {
                    const data = JSON.stringify(json)
                    if (data.length) {
                        emailExistente = true 
                    }
                });
            } else {
                emailExistente = false
            }
        }).catch(function (erro) {
            console.log(erro);
        })
    }
}

function validarcnpj() {
    const cnpj = inputCnpj.value
    console.log(cnpj)
    if (cnpj) {
        fetch("/usuarios/validarcnpj", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cnpjServer: cnpj
            })
        }).then(function (resposta) {
            if (!resposta.ok) {
                resposta.json().then(json => {
                    const data = JSON.stringify(json)
                    if (data.length) {
                        cnpjExistente = true
                    }
                });
            } else {
                cnpjExistente = false
            }
        }).catch(function (erro) {
            console.log(erro);
        })
    }
}