var database = require("../database/config")

function entrar(email, senha) {
    // A função recebe parametros que são os dados da controller.js e realiza o insert no banco
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;

    return database.executar(instrucao);
}

async function cadastrar(nome, cnpj, razaoSocial, fantasyName, email, password, tellphone, cep, state, cidade, logradouro, number) {
    var instrucao = `
        INSERT INTO shopping (razao_social, nome_fantasia, cnpj, cep, estado, cidade, logradouro, numero) VALUES ('${razaoSocial}', '${fantasyName}', '${cnpj}', '${cep}', '${state}', '${cidade}', '${logradouro}', '${number}');
    `;
    await database.executar(instrucao);
    return cadastroUsuario(nome, email, tellphone, password, cnpj)
}

async function cadastroUsuario(nome, email, tellphone, password, cnpj) {
    var instrucaoSelect = `
    SELECT id_shopping FROM shopping WHERE cnpj = '${cnpj}'`
    await database.executar(instrucaoSelect).then(async (shopping) => {
        var fkShopping = Object.values(JSON.parse(JSON.stringify(shopping)))
        var id_shopping = fkShopping[0].id_shopping
        var instrucao = `
        INSERT INTO usuario (nome, email, telefone, senha, fk_shopping) VALUES ('${nome}', '${email}', '${tellphone}', '${password}', ${id_shopping})
        `
        return await database.executar(instrucao);
    }).catch((err) => {
        console.log(err)
    })
}

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function validaremail(email) {
    console.log('validei o email')
    console.log('com o email', email)
    var instrucao = `SELECT * FROM usuario WHERE email = '${email}';`;
    return database.executar(instrucao);
}

function validarcnpj(cnpj) {
    console.log('validei o cnpj')
    console.log('com o cnpj', cnpj)
    var instrucao = `SELECT * FROM shopping WHERE cnpj = '${cnpj}';`;
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    validaremail,
    validarcnpj
};