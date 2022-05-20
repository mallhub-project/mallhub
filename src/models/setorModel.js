var database = require("../database/config")

async function listar(id_shopping) {
    var instrucao = `SELECT setor.id_setor, setor.nome, setor.descricao, setor.fk_shopping FROM shopping 
    inner join setor on shopping.id_shopping = setor.fk_shopping WHERE id_shopping = ${id_shopping};`

    return await database.executar(instrucao);
}

function cadastrar (nome, descricao, id_shopping) {
    var instrucao = `
    INSERT INTO setor (nome, descricao, fk_shopping) VALUES ('${nome}', '${descricao}', ${id_shopping});
    `
    return database.executar(instrucao);
}

function editar(id_setor, nome, descricao) {
    var instrucao = `
        UPDATE setor SET nome = '${nome}', descricao = '${descricao}' WHERE id_setor = ${id_setor};
    `
    return database.executar(instrucao);
}

function apagar(id_setor) {
    var instrucao = `
        DELETE FROM setor WHERE id_setor = ${id_setor};
    `
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar,
    editar,
    apagar
}