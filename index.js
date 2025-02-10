const http = require('http');

http.createServer((req,res)=>{
    res.write("Hello this is Node Server");
    res.end();
}).listen(4500);