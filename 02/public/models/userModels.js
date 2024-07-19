const Sequelize = require("sequelize");
const connection = require("../db/conexao");

// CRIANDO TABELA DE USUÁRIO
const Usuario = connection.define("users", {
  firstname: { type: Sequelize.STRING },
  lastname: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  status: { type: Sequelize.BOOLEAN },
  
});
// GERANDO UMA TABELA
// Usuario.sync({force:true})
module.exports=Usuario;
