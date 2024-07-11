const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response
    .status(200)
    .render("homePage", {
      titulo: "SISTEMA DE SELEÇÃO DE CANDIDATOS",
      ano: new Date().getFullYear(),
    });
});


router.use((req,res)=>{
  res.status(404).send({erro:"Página não encontrada!"})
})
module.exports = router;
