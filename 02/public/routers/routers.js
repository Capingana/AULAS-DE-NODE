const express = require("express");
const rotas = express.Router();
const connection = require("../db/conexao");
const UserTable = require("../models/userModels");

rotas.get("/", (req, res) => {
  let dados = [];
  dados.push(
    UserTable.create({
      firstname: "Sabino",
      lastname: "Capingana",
      email: "scapingana@gmail.com",
      status: false,
    })
  );
  res.status(200).render("homePage", {
    titulo: "SIS | SISTEMA INTEGRADO DE SELEÇÃO",
    dados,
  });
});

module.exports = rotas;
