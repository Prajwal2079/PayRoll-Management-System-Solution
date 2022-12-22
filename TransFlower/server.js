var express=require("express");
var app=express();


app.get('/',(req,res)=>
{
    res.send("<h1>This is TransFlower</h1>");
    res.end();

})

app.listen(5000);
console.log("Server is listing on 5000 port");