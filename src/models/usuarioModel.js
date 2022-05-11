var database = require("../database/config")

function entrar(email, senha) {
    var instrucao = `
        SELECT usuario.id_usuario, usuario.nome, usuario.cpf, usuario.email, usuario.telefone, usuario.cargo, usuario.fk_superior, usuario.fk_shopping, shopping.nome_fantasia, shopping.razao_social, shopping.cnpj, shopping.cep, shopping.cidade, shopping.estado, shopping.logradouro, shopping.numero FROM usuario inner join shopping on usuario.fk_shopping = shopping.id_shopping WHERE email = '${email}' AND senha = '${senha}';
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
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
async function listarUsuario(idUsuario) {
    var instrucao = `
        SELECT * FROM usuario WHERE id_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return await database.executar(instrucao);
}
function salvarUsuario(nome, cpf, telefone, cargo, idUsuario) {
    var instrucao = `
        UPDATE usuario SET nome = '${nome}', cpf = '${cpf}', telefone = '${telefone}', cargo = '${cargo}' WHERE id_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function validaremail(email) {
    var instrucao = `SELECT * FROM usuario WHERE email = '${email}';`;
    return database.executar(instrucao);
}

function validarcnpj(cnpj) {
    var instrucao = `SELECT * FROM shopping WHERE cnpj = '${cnpj}';`;
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    salvarUsuario,
    listarUsuario,
    listar,
    validaremail,
    validarcnpj
};