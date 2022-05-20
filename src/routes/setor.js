var express = require("express");
var router = express.Router();

var setorController = require("../controllers/setorController");

router.get("/listar", function (req, res) {
    setorController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    setorController.cadastrar(req, res);
});

router.post("/editar", function (req, res) {
    setorController.editar(req, res);
});

router.post("/apagar", function (req, res) {
    setorController.apagar(req, res);
});

module.exports = router;