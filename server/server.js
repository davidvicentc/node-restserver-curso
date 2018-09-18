require("./config/config");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/usuario", (req, res) => {
  res.json("get usuario");
});

app.post("/usuario", (req, res) => {
  let body = req.body;

  if (body.nombre === undefined) {
    res.status(400).json({
      ok: false,
      mensaje: "el nombre es necesario"
    });
  } else {
    res.json({
      body
    });
  }
});

app.put("//:id", (req, res) => {
  res.json({
    id
  });
});

app.delete("/usuario", (req, res) => {
  res.json("delete usuario");
});

app.listen(process.env.PORT, () => {
  console.log("server corriendo en el puerto:", process.env.PORT);
});
