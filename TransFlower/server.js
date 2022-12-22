<<<<<<< HEAD
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
app.get("/",(req,resp)=>{
    resp.write("Hello World");
    resp.end();
});
app.get("/index",(req,resp)=>{
    resp.render("./public/index.html")
    resp.end();
});

app.listen(3000);
console.log("Express server started on port no 3000")
=======
var express=require("express");
var app=express();
var fs=require("fs");
app.use(express.static('public'))


app.get('/',(req,res)=>
{
   res.sendFile("index.html");
})

app.listen(4000);
console.log("Server is listing on 4000 port");
>>>>>>> 60dcd0c673679ba1c28cf6d60a51a731641558b6
