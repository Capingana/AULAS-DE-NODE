const express = require("express");
const rotas = express.Router();
const PostagemModel = require("../models/posModel");
const UsuarioModel = require("../models/userModel");

// Rotas===================================================
rotas.get("/", (req, res) => {
  cursos = [
    { nome: "Informática", descriptino: "Engenharia Informática no ISUWACO" },
    { nome: "Agrária", descriptino: "Engenharia Informática no ISUWACO" },
    { nome: "Mecanica", descriptino: "Engenharia Informática no ISUWACO" },
    { nome: "Informática", descriptino: "Engenharia Informática no ISUWACO" },
    { nome: "Enfermagem geral", descriptino: "Engenharia Informática no ISUWACO" },
    { nome: "Informática", descriptino: "Engenharia Informática no ISUWACO" },
  ];
  res.status(200).render("home", {
    titulo: "SISC | SISTEMA INTEGRADO DE SELEÇÃO DE CANDIDATOS",
    data: new Date().getFullYear(),
    cursos,
  });
});

rotas.get("/cadastro", (req, res) => {
  res.status(200).render("formulario", {
    titulo: "SISC | SISTEMA INTEGRADO DE SELEÇÃO DE CANDIDATOS-Cadastro",
    data: new Date().getFullYear(),
  });
});

// ========================================Página não encontrada!!!!!!!!!!!!!
rotas.use((req, res) => {
  res.status(404).send({ falha: "404-Página não encontrada!" });
});
//==============================================================
module.exports = rotas;
