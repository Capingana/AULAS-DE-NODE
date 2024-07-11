const express=require("express");
const app=express();
const PORT=3000;
const arquivosEstaticos=require("path");
app.use(express.static(arquivosEstaticos.join(__dirname,"public")));
const mainRouter=require("./public/routes/mainRouter");
app.set("view engine","ejs");
// ================================================================
app.use("/",mainRouter);

app.listen(PORT,()=>console.log("O servidor está rodando na porta:"+PORT));