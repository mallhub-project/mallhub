var database = require("../database/config")


// async function deletar(id_usuario){
//     var instrucao = `
//     delete from usuario where id_usuario = ${id_usuario};
// `;
// await database.executar(instrucao);
// return cadastroUsuario(nome, email, cpf, senha, cargo, fk_superior, fk_shopping)
// }



async function cadastrar(nome, email, cpf, senha, cargo, fk_superior, fk_shopping) {
    var instrucao = `
        INSERT INTO usuario (nome, email, cpf, senha, cargo, fk_superior, fk_shopping) VALUES ('${nome}', '${email}', '${cpf}', '${senha}', '${cargo}', '${fk_superior}', '${fk_shopping}');
    `;
    await database.executar(instrucao);
    return cadastroUsuario(nome, email, cpf, senha, cargo, fk_superior, fk_shopping)
}



function listar(id_shopping) {
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listar
};