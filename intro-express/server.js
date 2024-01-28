const express = require("express");
const path = require("path");
const todoDb = require("./data/todo-db");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/todos", (req, res) => {
  const todos = todoDb.getAll();

  res.render("todos/index", {todos});
});

app.get("/", (req, res) => {
  res.send("<h1>Hello Express!</h1>");
});

app.get('/user')

app.get("/home", (req, res) => {
  res.render("home");
});

app.post("/");

app.listen(3000, () => {
  console.log("Listening on port 3000");
});