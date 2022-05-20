var database = require("../database/config")

function listar(id_shopping) {
    var instrucao = `
    SELECT localidade.id_localidade, localidade.nome, localidade.descricao, localidade.fk_setor FROM shopping 
    inner join setor on shopping.id_shopping = setor.fk_shopping 
    inner join localidade on setor.id_setor = localidade.fk_setor WHERE id_shopping = ${id_shopping};`

    return database.executar(instrucao);
}

function cadastrar(nome, descricao, id_setor) {
    var instrucao = `
        insert into localidade (nome, descricao, fk_setor) values ('${nome}', '${descricao}', ${id_setor});
    `
    return database.executar(instrucao);
}

function editar(nome, descricao, id_localidade, id_setor) {
    var instrucao = `
    update localidade set nome = '${nome}', descricao = '${descricao}', fk_setor = ${id_setor} where id_localidade = ${id_localidade};
    `
    return database.executar(instrucao);
}

function apagar(id_localidade) {
    var instrucao = `
        DELETE FROM localidade WHERE id_localidade = ${id_localidade};
    `
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar,
    editar,
    apagar
}