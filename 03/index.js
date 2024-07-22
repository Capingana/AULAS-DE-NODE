const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const indeRouter = require("./public/routers/router");
const bodyParser = require("body-parser");
const moment = require("moment");
const porta = 3000;

// CONFIGURATION BODY-PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// ==========================================
// CONFIGURATION ARQUIVOS ESTATICOS
app.use(express.static("public"));
// =============================================
// CONFIGURATION ENGINE TEMPLATE HANDLEBARS

app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    helpers: {
      formatDate: (date) => {
        return moment(date).format("DD/MM/YYYY H:m");
      },
    },
  })
);
app.set("view engine", "handlebars");
// ==============================================

// USED  ROUTER
app.use("/", indeRouter);
// LISTEN THE PORT
app.listen(porta, () => {
  console.log(`O servidor está rodando na porta:${porta}`);
});
