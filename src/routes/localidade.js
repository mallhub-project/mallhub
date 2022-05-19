var express = require("express");
var router = express.Router();

var localidadeController = require("../controllers/localidadeController");

router.get("/listar", function (req, res) {
    localidadeController.listar(req, res);
});

module.exports = router;