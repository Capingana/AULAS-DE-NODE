const express=require("express");
const app=express();
const handlebars=require("express-handlebars");
const indeRouter = require("./public/routers/router");
const porta=3000;



// CONFIGURATION ARQUIVOS ESTATICOS
app.use(express.static("public"));
// CONFIGURATION ENGINE TEMPLATE HANDLEBARS
app.engine("handlebars",handlebars.engine({defaultLayout:"main"}));
app.set("view engine","handlebars");







// USED  ROUTER
app.use("/",indeRouter);
// LISTEN THE PORT
app.listen(porta,()=>{console
    .log(`O servidor está rodando na porta:${porta}`);
})
