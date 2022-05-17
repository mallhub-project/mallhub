var dispositivoModel = require("../models/dispositivoModel");



function listar(req, res) {
    dispositivoModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function cadastrar(req, res) {
    var nome = req.body.nomeServer
    var cnpj = req.body.cnpjServer;
    var razaoSocial = req.body.razaoSocialServer;
    var fantasyName = req.body.fantasyNameServer;
    var email = req.body.emailServer;
    var password = req.body.passwordServer;
    var tellphone = req.body.tellphoneServer;
    var cep = req.body.cepServer;
    var state = req.body.stateServer;
    var cidade = req.body.cidadeServer;
    var logradouro = req.body.logradouroServer;
    var number = req.body.numberServer;

    // Faça as validações dos valores
    if (cnpj == undefined) {
        res.status(400).send("Seu CNPJ está undefined!");
    } else if (fantasyName == undefined) {
        res.status(400).send("Seu nome Fantasia está undefined!");
    } else if (razaoSocial == undefined) {
        res.status(400).send("Sua razão social está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (password == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (tellphone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (state == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    } else if (number == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {

        usuarioModel.cadastrar(nome, cnpj, razaoSocial, fantasyName, email, password, tellphone, cep, state, cidade, logradouro, number)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



module.exports = {
    listar,
    cadastrar
}