var acessoModel = require("../models/acessoModel");

var sessoes = [];

function listar(req, res) {
    var id_shopping = req.query.idShopping
    acessoModel.listar(id_shopping)
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
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var cpf = req.body.cpfServer;
    var senha = req.body.senhaServer;
    var cargo = req.body.cargoServer;
    var fk_superior = req.body.fk_superiorServer;
    var fk_shopping = req.body.fk_shoppingServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinido!");
    } else if (cargo == undefined) {
        res.status(400).send("Seu cargo está indefinido!");
    } else if (fk_superior == undefined) {
        res.status(400).send("Seu superior está indefinido!");
    } else if (fk_shopping == undefined) {
        res.status(400).send("Seu shopping está indefinido!");
    } else {
        acessoModel.cadastrar(nome, email, cpf, senha, cargo, fk_superior, fk_shopping)
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
    cadastrar,
    listar

}