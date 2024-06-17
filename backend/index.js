const express = require("express");
const app = express();
const db = require("./config/db");

app.use(express.json());



app.listen(8080, () => {
  console.log("Server Listen 8080 Port");
});
