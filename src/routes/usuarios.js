var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});


//validar email e validar cnpj
router.post("/validaremail", function (req, res) {
    usuarioController.validaremail(req, res);
});

router.post("/validarcnpj", function (req, res) {
    usuarioController.validarcnpj(req, res);
});
// Atualizar perfil do usuario
router.post("/atualizar", function (req, res) {
    usuarioController.salvarUsuario(req, res);
});

router.get("/listar-usuario/:idUsuario", (req, res) => {
    usuarioController.findByIdUsuario(req, res)
}) 

module.exports = router;