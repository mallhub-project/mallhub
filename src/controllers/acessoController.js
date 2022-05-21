var acessoModel = require("../models/acessoModel");

var sessoes = [];

// function deletar(req, res) {

//     var id_usuario = req.body.id_usuarioServer

//     if (id_usuario == undefined) {
//         res.status(400).send("Seu id está indefinido!");
//     } else {
//        acessoModel.deletar(id_usuario)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nHouve um erro ao realizar o cadastro! Erro: ",
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }
// }





function listar(req, res) {
    var id_shopping = req.query.idShopping
    acessoModel.listar(id_shopping)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var cpf = req.body.cpfServer;
    var senha = req.body.senhaServer;
    var cargo = req.body.cargoServer;
    var fk_superior = req.body.fk_superiorServer;
    var fk_shopping = req.body.fk_shoppingServer;

    if (nivel == undefined) {
        res.status(400).send("Seu nivel está undefined!");
    } else {

        acessoModel.cadastrar(nome, email, cpf, senha, cargo, fk_superior, fk_shopping)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    deletar,
    listar

}