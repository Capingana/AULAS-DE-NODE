const express = require("express");
const connection = require("../database/connect");
// const UsuarioModel = require("../models/userModel");
const PostagemModel = require("../models/postModel");
const { where } = require("sequelize");
const router = express.Router();

// =======================================================================
router.get("/", (req, res) => {
  PostagemModel.findAll({ order: [["id", "DESC"]] }).then((posts) => {
    res.status(200).render("home", {
      posts,
      titulo: "SISC | SISTEMA INTEGRADO DE SELEÇÃO DE CANDIDATOS",
    });
  });
});
// =======================================================================
router.get("/cadastro", (req, res) => {
  res.status(200).render("./pages/formulario", {
    titulo: "SISC | SISTEMA INTEGRADO DE SELEÇÃO DE CANDIDATOS",
  });
});
// =======================================================================
router.get("/sobre", (req, res) => {
  res.status(200).render("./pages/sobre", {
    titulo: "SISC | SISTEMA INTEGRADO DE SELEÇÃO DE CANDIDATOS",
  });
});
// =======================================================================
router.post("/add-form", (req, res) => {
  PostagemModel.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  });
  res.status(200).redirect("/cadastro");
});
router.get("/apagarPost/:id", (req, res) => {
  PostagemModel.destroy({
    where: { 'id': req.params.id },
  });
  res.status(200).redirect("/");
});
// =================================NOT FOUND======================================
router.use((req, res) => {
  res.status(404).render("./pages/404", {
    titulo: "SISC | SISTEMA INTEGRADO DE SELEÇÃO DE CANDIDATOS",
  });
});

module.exports = router;
