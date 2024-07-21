const express = require("express");
const rotas = require("./public/routers/router");
const handlebars=require("express-handlebars");
const app = express();
const porta = 3000;

// ===============CONFIGURATIONS
app.use("/", rotas);
// ARQUIVOS ESTATICOS
app.use(express.static("public"));

// CONFIGURANDO O HANDLEBARS=======================================
app.engine("handlebars",handlebars.engine({defaultLayout:"main"}));
app.set("view engine","handlebars");
// ===================================================================
app.listen(porta, () => {
  console.log(`Servidor rodando na porta:${porta}`);
});
