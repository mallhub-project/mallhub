var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
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

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer
    var cnpj = req.body.cnpjServer;
    var razaoSocial = req.body.razaoSocialServer;
    var fantasyName = req.body.fantasyNameServer;
    var email = req.body.emailServer;
    var password = req.body.passwordServer;
    var tellphone = req.body.tellphoneServer;
    var cep = req.body.cepServer;
    var state = req.body.stateServer;
    var cidade = req.body.cidadeServer;
    var logradouro = req.body.logradouroServer;
    var number = req.body.numberServer;
    
    // Faça as validações dos valores
    if (cnpj == undefined) {
        res.status(400).send("Seu CNPJ está undefined!");
    } else if (fantasyName == undefined) {
        res.status(400).send("Seu nome Fantasia está undefined!");
    } else if (razaoSocial == undefined) {
        res.status(400).send("Sua razão social está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (password == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (tellphone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (state == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    } else if (number == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        
        usuarioModel.cadastrar(nome, cnpj, razaoSocial, fantasyName, email, password, tellphone, cep, state, cidade, logradouro, number)
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

function validaremail(req, res) {
    var email = req.body.emailServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {
        usuarioModel.validaremail(email)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(409).json(resultado);
            } else {
                res.status(200).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta do email! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function validarcnpj(req, res) {
    var cnpj = req.body.cnpjServer;

    if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else {
        usuarioModel.validarcnpj(cnpj)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(409).json(resultado);
            } else {
                res.status(200).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta do cnpj! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}
async function salvarUsuario(req, res) { 
    var nome = req.body.nomeServer;
    var cpf = req.body.cpfServer;
    var telefone = req.body.telefoneServer;
    var cargo = req.body.cargoServer;
    var idUsuario = req.body.idUsuarioServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (cargo == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    } else {
        await usuarioModel.salvarUsuario(nome, cpf, telefone, cargo, idUsuario)
            .then(function (resultado) {
                if (resultado.affectedRows > 0) {
                    res.status(200).send('OK')
                } else {
                    res.status(404).json('Não foi possivel localizar o ID do usuario informado');
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao atualizar o nome, cpf, telefone ou cargo! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    
}

async function salvarShopping(req, res) { 
    var razao_social = req.body.razaoSocialServer;
    var nome_fantasia = req.body.nomeFantasiaServer;
    var cnpj = req.body.cnpjServer;
    var idShopping = req.body.idShoppingServer;

    if (razao_social == undefined) {
        res.status(400).send("Sua razao_social está undefined!");
    } else if (nome_fantasia == undefined) {
        res.status(400).send("Seu nome_fantasia está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    }
     else {
        await usuarioModel.salvarShopping(razao_social, nome_fantasia, cnpj, idShopping)
            .then(function (resultado) {
                if (resultado.affectedRows > 0) {
                    res.status(200).send('OK')
                } else {
                    res.status(404).json('Não foi possivel localizar o ID do usuario informado');
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao atualizar a razao_social, nome_fantasia, cnpj   Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    
}

async function findByIdUsuario(req, res) {
    const idUsuario = req.params.idUsuario;
    console.log(req.params)
    console.log('cai aqui')
    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else {
        usuarioModel.listarUsuario(idUsuario)
            .then(function (resultado) {
                if (resultado) {
                    
                    var usuario = Object.values(JSON.parse(JSON.stringify(resultado)))
                    console.log(usuario)
                    
                    res.status(200).send(usuario[0])
                } else {
                    res.status(404).json("Usuario não encontrado !");
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar a consulta do email! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

async function findByIdShopping(req, res) {
    const idShopping = req.params.idShopping;
    console.log(req.params)
    if (idShopping == undefined) {
        res.status(400).send("Seu idShopping está undefined!");
    } else {
        usuarioModel.listarShopping(idShopping)
            .then(function (resultado) {
                if (resultado) {
                    //console.log('AQUI', resultado)
                    var shopping = Object.values(JSON.parse(JSON.stringify(resultado)))
                    console.log(shopping, 'aqui')
                    
                    res.status(200).send(shopping[0])
                
                } else {
                    res.status(404).json("Shopping não encontrado !");
                }
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar a consulta do email! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    entrar,
    cadastrar,
    salvarUsuario,
    findByIdUsuario,
    listar,
    testar,
    validaremail,
    findByIdShopping,
    salvarShopping,
    validarcnpj
}