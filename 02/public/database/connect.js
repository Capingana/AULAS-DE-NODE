const Sequelize = require("sequelize");
const connection = new Sequelize("blog", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

connection
  .authenticate()
  .then(() => {
    console.log(`Conectado com sucesso a base de dados:Mysql`);
  })
  .catch((error) => {
    console.log(`Erro de coexão:${error}`);
  });

  module.exports=connection;
