    const express=require("express");
    const app=express();
    app.get("/",function(req,resp){
        console.log("inside Server");
        resp.send("<h1>This is under Server</h1>");
    })
    app.listen(3000);
    console.log("This code is running on port number 3000");