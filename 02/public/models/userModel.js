const Sequelize=require("sequelize");
const connection = require("../database/connect");

const UsuarioModel=connection.define("usuarios",{
nome:{type:Sequelize.STRING},
sobrenome:{type:Sequelize.STRING},
dataNascimento:{type:Sequelize.STRING},
email:{type:Sequelize.STRING},
});

// UsuarioModel.sync({force:true});

module.exports=UsuarioModel