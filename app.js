const http = require("http");
const express = require("express");

const app = express();

app.use("/no",(req,res,next)=>{
  res.send("<h1>hello google.. </h1>");
});
app.use("/",(req,res,next)=>{
  res.send("<h1>hello google..</h1>");
  next();
});



const server =     http.createServer(app);

server.listen(3000);