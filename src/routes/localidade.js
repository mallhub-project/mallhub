var express = require("express");
var router = express.Router();

var localidadeController = require("../controllers/localidadeController");

router.get("/listar", function (req, res) {
    localidadeController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    localidadeController.cadastrar(req, res);
});

router.post("/editar", function (req, res) {
    localidadeController.editar(req, res);
});

router.post("/apagar", function (req, res) {
    localidadeController.apagar(req, res);
});

module.exports = router;