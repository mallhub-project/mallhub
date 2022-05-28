var database = require("../database/config");

function buscarUltimasMedidas(id_shopping) {
    instrucaoSql = `select shopping.nome_fantasia, count(evento.chave) as 'TotalPessoas', 
    date_format(evento.data_hora, '%d/%c/%Y') as 'Data', date_format(evento.data_hora, '%H:00') as 'hora' from shopping 
    join setor on id_shopping = fk_shopping
    join localidade on id_setor = fk_setor
    join dispositivo on id_localidade = fk_localidade
    join evento on id_dispositivo = fk_dispositivo
    where id_shopping = ${id_shopping} and chave > 0 group by dispositivo.id_dispositivo;`;
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(id_shopping) {
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select shopping.nome_fantasia, count(evento.chave) as 'TotalPessoas', 
                    
        date_format(evento.data_hora, '%H:00') as 'hora' from shopping 
    
        join setor on id_shopping = fk_shopping
    
        join localidade on id_setor = fk_setor
    
        join dispositivo on id_localidade = fk_localidade
    
        join evento on id_dispositivo = fk_dispositivo
    
        where id_shopping = ${id_shopping} and chave > 0 group by dispositivo.id_dispositivo;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select shopping.nome_fantasia, count(evento.chave) as 'TotalPessoas', 
    date_format(evento.data_hora, '%d/%c/%Y') as 'Data', date_format(evento.data_hora, '%H:00') as 'hora' from shopping 
    join setor on id_shopping = fk_shopping
    join localidade on id_setor = fk_setor
    join dispositivo on id_localidade = fk_localidade
    join evento on id_dispositivo = fk_dispositivo
    where id_shopping = ${id_shopping} and chave > 0 group by dispositivo.id_dispositivo;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return 
    }

    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}