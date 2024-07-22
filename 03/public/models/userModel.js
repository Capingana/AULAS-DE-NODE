const Sequelize = require("sequelize");
const connection = require("../database/connect");
const UsuarioModel = connection.define("usuario", {
  username: { type: Sequelize.STRING },
  useremail: { type: Sequelize.STRING },
  userBirthday: { type: Sequelize.STRING },
});

// UsuarioModel.sync({force:true});

module.exports=UsuarioModel;
