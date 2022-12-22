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