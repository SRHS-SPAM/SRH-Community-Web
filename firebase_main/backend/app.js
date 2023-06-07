var fs = require("fs");
var express = require("express");
var app = express();
var http = require("http");

app.use("/sript", express.static(__dirname, "/script"));

var server = http.createServer(app).listen(3000, function () {
  console.log("Server Running . ");
});

app.get("/", function (req, res) {
  fs.readFile("index.html", function (error, data) {
    res.writeHead(200, { "content-type": "text/html" });
  });
});
