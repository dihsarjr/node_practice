const http = require("http");

const server =     http.createServer((request,response)=>{
  var url =   request.url;
  if(url === "/"){
    response.write("<h1>hi this is ny first server 1 the main server..</h1>");
  }else{
    response.write("<h1>hi this is ny first server..</h1>");
  }
 
});

server.listen(3000);