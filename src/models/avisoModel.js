var database = require("../database/config");

function listar(id_shopping) {
    var instrucao = `
    SELECT alerta.id_alerta, alerta.data_hora, alerta.descricao, alerta.tipo_alerta, 
    alerta.fk_dispositivo FROM shopping 
    JOIN setor ON shopping.id_shopping = setor.fk_shopping
    JOIN localidade ON setor.id_setor = localidade.fk_setor
    JOIN dispositivo ON localidade.id_localidade = dispositivo.fk_localidade
    JOIN alerta on dispositivo.id_dispositivo = alerta.fk_dispositivo WHERE shopping.id_shopping = ${id_shopping};
    `;
    return database.executar(instrucao);
}

function cadastrar(descricao, tipoAlerta, id_dispositivo) {
    var instrucao = `
        INSERT INTO alerta (descricao, tipo_alerta, fk_dispositivo) VALUES ('${descricao}', ${tipoAlerta}, ${id_dispositivo});
    `;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar
}
