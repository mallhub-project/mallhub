var database = require("../database/config")

async function listar(id_shopping) {
    console.log(id_shopping, "id na model")
    var instrucao = `SELECT setor.id_setor, setor.nome, setor.descricao, setor.fk_shopping FROM shopping 
    inner join setor on shopping.id_shopping = setor.fk_shopping WHERE id_shopping = ${id_shopping};`

    return await database.executar(instrucao);
}

module.exports = {
    listar
}