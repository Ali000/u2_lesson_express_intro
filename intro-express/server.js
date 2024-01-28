const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get('/user')

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

