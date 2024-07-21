const Sequelize = require("sequelize");
const connection = require("../database/connect");

const PostagemModel = connection.define("postagens", {
  titulo: { type: Sequelize.STRING },
  conteudo: { type: Sequelize.STRING },
});

// PostagemModel.sync({ force: true });

module.exports = PostagemModel;
