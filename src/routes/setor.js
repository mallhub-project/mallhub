var express = require("express");
var router = express.Router();

var setorController = require("../controllers/setorController");

router.get("/listar", function (req, res) {
    setorController.listar(req, res);
});

module.exports = router;