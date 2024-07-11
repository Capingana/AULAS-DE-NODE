const express = require("express");
const router = express.Router();
const mysql = require("mysql"); //mysql
// conectado ao mysql

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog",
});

router.get("/", (request, response) => {
  connection.query("SELECT * FROM users", (error, usuario) => {
    if (error) {
      response.send({
        error: "Falha ao se conectar com a base de dados mysql",
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
