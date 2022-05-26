var express = require("express");
var router = express.Router();

var dispositivoController = require("../controllers/dispositivoController");

router.get("/listar", function (req, res) {
    dispositivoController.listar(req, res);
});

router.get("/listar-por-id", function (req, res) {
    dispositivoController.listarPorId(req, res);
});

router.post("/editar", function (req, res) {
    dispositivoController.editar(req, res);
});

router.post("/cadastrar", function (req, res) {
    dispositivoController.cadastrar(req, res);
});

router.post("/apagar", function (req, res) {
    dispositivoController.apagar(req, res);
});

module.exports = router;