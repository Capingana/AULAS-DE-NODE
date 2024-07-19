const express=require("express");
const app=express();
const port=3000;
const indexRotas=require( "./public/routers/routers");

// configurações
app.use(express.static("public"))
app.set("view engine","ejs");

app.use("/",indexRotas);
// ===========================



app.listen(port,()=>{console.log("Servidor OK...")});



