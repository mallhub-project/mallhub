var database = require("../database/config")

async function cadastrar(nome, email, cpf, senha, cargo, fk_superior, fk_shopping) {
    var instrucao = `
        INSERT INTO usuario (nome, email, cpf, senha, cargo, fk_superior, fk_shopping) 
        VALUES ('${nome}', '${email}', '${cpf}', '${senha}', '${cargo}', ${fk_superior}, ${fk_shopping});
    `;
    await database.executar(instrucao);
}

function listar(id_shopping) {
    var instrucao = `
        SELECT shopping.id_shopping, usuario.nome, usuario.fk_superior from usuario 
        JOIN shopping ON id_shopping = fk_shopping 
        WHERE id_shopping = ${id_shopping};
    `;
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};