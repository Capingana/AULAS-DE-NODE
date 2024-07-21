const express = require("express");
const rotas = require("./public/routers/router");
const handlebars=require("express-handlebars");
const app = express();
const porta = 3000;

// ===============CONFIGURATIONS
app.use("/", rotas);
// ARQUIVOS ESTATICOS
app.use(express.static("public"));
// TEMPLATE ENGINE EJS
// app.set("view engine","ejs");

// CONFIGURANDO O HANDLEBARS
app.engine("handlebars",handlebars.engine({defaultLayout:"main"}));
app.set("view engine","handlebars");

app.listen(porta, () => {
  console.log(`Servidor rodando na porta:${porta}`);
});
