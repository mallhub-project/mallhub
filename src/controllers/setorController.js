var setorModel = require("../models/setorModel");

function listar(req, res) {
    var id_shopping = req.query.idShopping

    setorModel.listar(id_shopping)
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
    var id_shopping = req.body.idShoppingServer;

    if (nome == undefined) {
        res.status(400).send("Seu Nome está indefinida!");
    } else if (descricao == undefined) {
        res.status(400).send("Sua Descrição está indefinida!");
    } else if (id_shopping == undefined) {
        res.status(400).send("Seu id_shopping está indefinido!");
    } else {
        setorModel.cadastrar(nome, descricao, id_shopping)
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
    var id_setor = req.body.idSetorServer;
    console.log(id_setor)
    var nome = req.body.nomeServer;
    var descricao = req.body.descricaoServer;

    if (id_setor == undefined) {
        res.status(400).send("Seu id_setor está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Sua nome está undefined!");
    } else if (descricao == undefined) {
        res.status(400).send("Sua descricao está undefined!");
    } else {
        setorModel.editar(id_setor, nome, descricao)
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

function apagar(req, res) {
    var id_setor = req.body.idSetorServer;

    setorModel.apagar(id_setor)
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