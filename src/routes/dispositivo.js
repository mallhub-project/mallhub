var express = require("express");
var router = express.Router();

var dispositivoController = require("../controllers/dispositivoController");


router.get("/listar", function (req, res) {
    dispositivoController.listar(req, res);
});

router.get("/editar", function (req, res) {
    dispositivoController.editar(req, res);
});
//Recebendo os dados do html e direcionando para a função cadastrar de dispositivoController.js
router.post("/cadastrar", function (req, res) {
    dispositivoController.cadastrar(req, res);
});

router.post("/deletar", function (req, res) {
    dispositivoController.deletar(req, res);
});

module.exports = router;