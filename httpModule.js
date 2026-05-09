const http = require('http');

const server = http.createServer(function(req,res){
    res.end("Hello!Manjeet Welcome to your server");
})

server.listen(3000,function(err){
    if(err) throw err;
    else console.log("server is running")
});