const express = require("express");
const app = express();

const path = require("path");

app.use(express.static("public"));

app.listen(3030,() => console.log("Servidor corriendo en el puerto 3030!"));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/index.html"));
});
app.get("/Babbage",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/babbage.html"));
});
app.get("/Berners-lee",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/berners-lee.html"));
});
app.get("/Clarke",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/clarke.html"));
});
app.get("/Hamilton",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/hamilton.html"));
});
app.get("/Hopper",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/hopper.html"));
});
app.get("/Lovelace",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/lovelace.html"));
});
app.get("/Turing",(req,res) => {
    res.sendFile(path.join(__dirname,"./views/turing.html"));
});