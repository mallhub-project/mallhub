var database = require("../database/config")


async function cadastrar(nome, descricao) {
    var instrucao = `
        INSERT INTO dispositivo (nome, descricao) VALUES ('${nome}', '${descricao}');
    `;
    await database.executar(instrucao);
    return cadastroUsuario(nome, descricao)
}



function listar() {
    var instrucao = `
        SELECT nome, descricao, ativo FROM dispositivo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar
};