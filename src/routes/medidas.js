var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:id_shopping", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:id_shopping", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/buscar-mes", function (req, res) {
    medidaController.buscarMedidasPorMes(req, res);
})


module.exports = router;