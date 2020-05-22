// req.query
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views'); // here is file global for path to render of app.get

// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// database users
var todos = [
  { id: 1, work: 'Wake up!' },
  { id: 2, work: 'Breakfast' },
  { id: 3, work: 'Go to school' },
  { id: 4, work: 'Come back home' }
];

// to render file index.pug in folders views
app.get('/', function(req, res) {
  res.render('index', {
    name: 'Thinh'
  });
});

// to render file index in folder views/users
app.get('/todos', function(req, res) {
  res.render('todos/index', {
    todos : todos
  });
});

// to render input to search
app.get('/todos/search', function(req, res) {
  var q = req.query.q;
  var matchedUsers = todos.filter(function(todo) {
    return todo.work.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  res.render('todos/index', {
    todos: matchedUsers
  });
});

// app.get('/users/create', function(req, res) {
//   res.render('users/create');
// });

// app.post('/users/create', function(req, res) {
//   users.push(req.body);
//   res.redirect('/users');
// });

// to use port and console.log in terminal
app.listen(port, function() {
  console.log('Server listening on port ' + port);
});