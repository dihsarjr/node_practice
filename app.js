const http = require("http");

const server =     http.createServer((request,response)=>{
    response.write("<h1>hi this is ny first server..</h1>");
});

server.listen(3000);