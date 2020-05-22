// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const pug = require("pug");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var todos = [
  { id: 1, work: "Wake up" },
  { id: 2, work: "Breakfast" },
  { id: 3, work: "Go to School" },
  { id: 4, work: "Come back home" },
  { id: 5, work: "Lunch" }
];

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.render("landingpage");
});

app.get("/todos", (req, res) => {
  res.render("list", { todos: todos });
});

app.get('/todos/search', function(req, res) {
  var q = req.query.q;
  var matchedUsers = todos.filter(function(todo) {
    return todo.work.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  res.render('list', {
    todos: matchedUsers
  });
});

app.get('/todos/create', function(req, res) {
  res.render("./create")
})

app.post('/todos/create', function(req, res) {
  todos.push(req.body);
  res.redirect("/todos");
})

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
