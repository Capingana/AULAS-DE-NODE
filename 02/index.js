const express = require("express");
const rotas = require("./public/routers/router");
const app = express();
const porta = 3000;

// ===============CONFIGURATIONS
app.use("/", rotas);
// ARQUIVOS ESTATICOS
app.use(express.static("public"));
// TEMPLATE ENGINE EJS
app.set("view engine","ejs");

app.listen(porta, () => {
  console.log(`Servidor rodando na porta:${porta}`);
});
