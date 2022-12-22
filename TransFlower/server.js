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