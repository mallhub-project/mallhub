var dispositivoModel = require("../models/dispositivoModel");

function listar(req, res) {
    var id_shopping = req.query.idShopping
    console.log(req.query.idShopping)
    console.log(id_shopping, "id na controller")

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

module.exports = {
    listar
}