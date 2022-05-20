var database = require("../database/config")

function listar(id_shopping) {
    var instrucao = `
    SELECT dispositivo.id_dispositivo, dispositivo.nome, dispositivo.descricao, dispositivo.ativo, 
    dispositivo.fk_localidade FROM shopping 
    JOIN setor ON shopping.id_shopping = setor.fk_shopping
    JOIN localidade ON setor.id_setor = localidade.fk_setor
    JOIN dispositivo ON localidade.id_localidade = dispositivo.fk_localidade WHERE shopping.id_shopping = ${id_shopping};
    `;
    return database.executar(instrucao);
}

module.exports = {
    listar
};