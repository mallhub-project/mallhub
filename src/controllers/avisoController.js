var avisoModel = require("../models/avisoModel");

function listar(req, res) {
    var id_shopping = req.query.idShopping
    console.log(req.query.idShopping)
    console.log(id_shopping, "id na controller")

    avisoModel.listar(id_shopping).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    var tipoAlerta = req.body.tipoAlerta
    var id_dispositivo = req.body.id_dispositivo

    if (id_dispositivo == undefined) {
        res.status(400).send("Seu ID está indefinido!");
    } else if (tipoAlerta == undefined) {
        res.status(400).send("O seu tipo de alerta está indefinido!");
    } else {
        avisoModel.cadastrar(tipoAlerta, id_dispositivo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function acharMetricasDispositivo(req, res) {
    avisoModel.acharMetricasDispositivo()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    cadastrar,
    acharMetricasDispositivo
}