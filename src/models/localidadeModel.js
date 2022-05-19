var database = require("../database/config")

async function listar(id_shopping) {
    console.log(id_shopping, "id na model")
    var instrucao = `
    SELECT localidade.id_localidade, localidade.nome, localidade.descricao, localidade.fk_setor FROM shopping 
    inner join setor on shopping.id_shopping = setor.fk_shopping 
    inner join localidade on setor.id_setor = localidade.fk_setor WHERE id_shopping = ${id_shopping};`

    return await database.executar(instrucao);
}

module.exports = {
    listar
}