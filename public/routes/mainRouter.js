const express = require("express");
const router = express.Router();

const connect=require("../db/db.js")
router.get("/", (request, response) => {
  connect.query("SELECT * FROM users", (error, usuario) => {
    if (error) {
      response.send({
        error,
      });
    } else {
      response.status(200).render("homePage", {
        titulo: "SISTEMA DE SELEÇÃO DE CANDIDATOS",
        subtitulo: "Inicio",
        ano: new Date().getFullYear(),
        usuario,
      });
    }
  });
});

router.use((req, res) => {
  res.status(404).render("./pages/404", {
    erro: "404-Página não encotrada!",
    titulo: "SISTEMA DE SELEÇÃO DE CANDIDATOS",
    subtitulo: "404",
    ano: new Date().getFullYear(),
  });
});

module.exports = router;
