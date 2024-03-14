// npm i express
const express = require("express"); //importa a framework
var bodyParser = require("body-parser");
const app = express(); //atribui o nome da framework ao nome app
var jsonParser = bodyParser.json();
// npm i cors
var cors = require("cors");
app.use(cors());

var up = 0;
var down = 0;
var left = 0;
var right = 0;
var garra = 0;

//usa o express para monitorar a porta 8080 e capturar os requests feitos pelo POST
app.post("/", jsonParser, function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });

  //armazena o valor recebido pela rede na variável bit
  up = req.body.up;
  down = req.body.down;
  left = req.body.left;
  right = req.body.right;
  garra = req.body.garra;

  res.end();
});

app.get("/", jsonParser, function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  res.write(
    JSON.stringify({
      up: up,
      down: down,
      left: left,
      right: right,
      garra: garra,
    }),
  );
  res.end();
});

app.listen(3000);
