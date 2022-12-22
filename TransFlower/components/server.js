var http = require(http)
var server = http.createServer(function(req,resp){
    resp.write("Hello World")
    resp.end()
})

server.listen(3000)