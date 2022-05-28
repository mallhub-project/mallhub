var database = require("../database/config");

function listar(id_shopping) {
    var instrucao = `
    SELECT alerta.id_alerta,
    tipoAlerta.nome as 'tipoAlertaNome',
    dispositivo.nome,
    day(alerta.data_hora) as 'dia', 
    month(alerta.data_hora) as 'mes', 
    year(alerta.data_hora) as 'ano', 
    hour(alerta.data_hora) as 'hora', 
    minute(alerta.data_hora) as 'minuto',
    tipoAlerta.descricao
    FROM shopping 
    join setor on shopping.id_shopping = setor.fk_shopping
    join localidade on setor.id_setor = localidade.id_localidade
    join dispositivo on localidade.id_localidade = dispositivo.fk_localidade
    JOIN alerta on dispositivo.id_dispositivo = alerta.fk_dispositivo
    JOIN tipoAlerta ON tipoAlerta.id_tipoAlerta = alerta.fk_tipoAlerta
    where shopping.id_shopping = ${id_shopping} order by alerta.data_hora desc;
    `;
    return database.executar(instrucao);
}

function cadastrar(tipoAlerta, id_dispositivo) {
    var instrucao = `
        INSERT INTO alerta (fk_tipoAlerta, fk_dispositivo) VALUES (${tipoAlerta}, ${id_dispositivo});
    `;
    return database.executar(instrucao);
}

function acharMetricasDispositivo() {
    var instrucao = `
        SELECT setor.nome as 'setor', localidade.nome as 'localidade', dispositivo.id_dispositivo, sum(evento.chave) as 'totalPessoas' 
        FROM shopping 
        right join setor on shopping.id_shopping = setor.fk_shopping
        right join localidade on setor.id_setor = localidade.id_localidade
        join dispositivo on localidade.id_localidade = dispositivo.fk_localidade
        join evento on dispositivo.id_dispositivo = evento.fk_dispositivo 
        group by dispositivo.id_dispositivo;
    `;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar,
    acharMetricasDispositivo
}
