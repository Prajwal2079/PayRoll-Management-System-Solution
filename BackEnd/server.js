var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var parseurl = require('parseurl');
var session = require('express-session');

const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());



 var routes=require("./router");
routes(app);

var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(4000);
console.log("listening on port 4000");


// var sessionConfiguration = {
//     secret : "secret",
//     resave : true,
//     saveUninitialized : false
// };
// app.use(session(sessionConfiguration));

// app.use(function(req, res,next){
//     if (!req.session.views) {
//        req.session.views = {};
//        req.session.views.employeeList=[];
//     }
 
//     var pathname=parseurl(req).pathname;
//     // count the views
//     req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
//     next();
//  })
