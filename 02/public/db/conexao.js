const Sequelize = require("sequelize");
// CONEXÃO COM A BASE DE DADOS
const connection = new Sequelize("candidaturas", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// VERIFICANDO SUPOSTOS ERROS DE CONEXÃO
connection
  .authenticate()
  .then(() => {
    console.log`Conectado com sucesso na base de dados MYSQL`;
  })
  .catch((error) => {
    console.log(`Falha ao se conectar com a base de dados:${error}`);
  });
  module.exports=connection;
