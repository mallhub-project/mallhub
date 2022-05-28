var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar-metricas", function (req, res) {
    avisoController.acharMetricasDispositivo(req, res);
});

router.post("/cadastrar", function (req, res) {
    avisoController.cadastrar(req, res);
});

module.exports = router;