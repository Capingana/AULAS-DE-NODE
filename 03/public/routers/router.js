const express = require("express");
const connection = require("../database/connect");
const router = express.Router();


// =======================================================================
router.get("/", (req, res) => {
  res
    .status(200)
    .render("home", {
      titulo: "SISC | SISTEMA INTEGRADO DE SELEÇÃO DE CANDIDATOS",
    });
});
// =======================================================================
router.get("/sobre", (req, res) => {
  res
    .status(200)
    .render("./pages/sobre", {
      titulo: "SISC | SISTEMA INTEGRADO DE SELEÇÃO DE CANDIDATOS",
    });
});
// =======================================================================
router.use((req, res) => {
  res
    .status(404)
    .render("./pages/404", {
      titulo: "SISC | SISTEMA INTEGRADO DE SELEÇÃO DE CANDIDATOS",
    });
});

module.exports = router;
