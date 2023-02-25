const http = require("http");
const server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h2>Starting..</h2>");
res.end();
}).listen(5000,()=>{console.log("Server running")});