var dispositivoModel = require("../models/dispositivoModel");

function listar(req, res) {
    var id_shopping = req.query.idShopping
    console.log(req.query.idShopping)
    console.log(id_shopping, "id na controller do dispositivo")

    dispositivoModel.listar(id_shopping)
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

function listarPorId(req, res) {
    var id_dispositivo = req.query.idDispositivo

    dispositivoModel.listarPorId(id_dispositivo)
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
    var fk_localidade = req.body.localidadeServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido aaaaa!");
    } else if (descricao == undefined) {
        res.status(400).send("Sua descrição está indefinida!");
    } else if (fk_localidade == undefined) {
        res.status(400).send("Sua localidade está indefinida!");
    } else {
        dispositivoModel.cadastrar(nome, descricao, fk_localidade)
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

function apagar(req, res) {
   var id_dispositivo = req.body.id_dispositivoServer

    if (id_dispositivo == undefined) {
        res.status(400).send("Seu id está indefinido!");
    } else {
        dispositivoModel.apagar(id_dispositivo)
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

function editar(req, res) {
    console.log(req.body.id_dispositivoServer, "id na controller")
    var id_dispositivo = req.body.id_dispositivoServer
    var nome = req.body.nomeServer;
    var descricao = req.body.descricaoServer;
    var fk_localidade = req.body.localidadeServer;

    if (id_dispositivo == undefined) {
        res.status(400).send("Seu id está indefinido!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("Sua descricao está indefinida!");
    } else if (fk_localidade == undefined) {
        res.status(400).send("Sua localidade está indefinida!");
    } else {
        dispositivoModel.editar(id_dispositivo, nome, descricao, fk_localidade)
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
    listarPorId,
    cadastrar,
    apagar,
    editar
}