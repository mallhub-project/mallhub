var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    var id_shopping = req.params.id_shopping;
    console.log(id_shopping)
    medidaModel.buscarUltimasMedidas(id_shopping).then(function (resultado) {
        
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            console.log(resultado)
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var id_shopping = req.params.id_shopping;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(id_shopping).then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal

}