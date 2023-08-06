const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public/dist"));

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
