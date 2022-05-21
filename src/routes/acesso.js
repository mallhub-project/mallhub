var express = require("express");
var router = express.Router();

var acessoController = require("../controllers/acessoController");


router.get("/listar", function (req, res) {
    acessoController.listar(req, res);
});


router.post("/cadastrar", function (req, res) {
    acessoController.cadastrar(req, res);
});


// router.post("/deletar", function (req, res) {
//     acessoController.deletar(req, res);
// });

module.exports = router;