const Sequelize = require("sequelize");
const connection = new Sequelize("blog", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

connection
  .authenticate()
  .then(() => {
    console.log("Sucesso ao se conectar com a base de dados Mysql...");
  })
  .catch((error) => {
    console.log(`Falha ao se conectar com a base de dados:${error}`);
  });

  module.exports=connection;
