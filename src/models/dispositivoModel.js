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

function cadastrar(nome, descricao, fk_localidade) {
    var instrucao = `
        INSERT INTO dispositivo (nome, descricao, ativo, fk_localidade, fk_tiposensor) values ('${nome}', '${descricao}', 1, ${fk_localidade}, 1);
    `
    return database.executar(instrucao);
}

function apagar(id_dispositivo) {
    var instrucao = `
        DELETE FROM dispositivo WHERE id_dispositivo = ${id_dispositivo};
    `
    return database.executar(instrucao);
}

function editar(id_dispositivo, nome, descricao, fk_localidade) {
    var instrucao = `
    UPDATE dispositivo SET nome = '${nome}', descricao = '${descricao}', fk_localidade = ${fk_localidade} WHERE id_dispositivo = ${id_dispositivo};
    `
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar,
    apagar,
    editar
};