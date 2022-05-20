var localidadeModel = require("../models/localidadeModel");

function listar(req, res) {
    var id_shopping = req.query.idShopping
    console.log(req.query.idShopping)
    console.log(id_shopping, "id na controller")

    localidadeModel.listar(id_shopping)
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
    var descricao = req.body.descricaoServer;
    var id_setor = req.body.idSetorServer;

    if (nome == undefined) {
        res.status(400).send("Seu Nome está indefinida!");
    } else if (descricao == undefined) {
        res.status(400).send("Sua Descrição está indefinida!");
    } else if (id_setor == undefined) {
        res.status(400).send("Seu id_setor está undefinido!");
    } else {
        localidadeModel.cadastrar(nome, descricao, id_setor)
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
}

function editar(req, res) {
    var nome = req.body.nomeServer
    var descricao = req.body.descricaoServer
    var id_localidade = req.body.idLocalidadeServer
    var id_setor = req.body.idSetorServer
    localidadeModel.editar(nome, descricao, id_localidade, id_setor)
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

function apagar(req, res) {
    var id_localidade = req.body.idLocalidadeServer
    localidadeModel.apagar(id_localidade)
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

module.exports = {
    listar,
    cadastrar,
    editar,
    apagar
}