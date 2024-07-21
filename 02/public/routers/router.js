const express = require("express");
const rotas = express.Router();
const PostagemModel = require("../models/posModel");
const UsuarioModel = require("../models/userModel");

// Rotas
rotas.get("/", (req, res) => {
  res
    .status(200)
    .render("./layouts/main", {
      titulo: "SISC | SISTEMA INTEGRADO DE SELEÇÃO DE CANDIDATOS",
    });
});

module.exports = rotas;
