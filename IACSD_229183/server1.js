var express=require("express");
var app=express();
app.get("/",(req,resp)=>{

    resp.send("<h2>Welcome to IACSD !!");
    resp.end();

});
app.listen(5000);
console.log("server is listening on 5000 !!");
