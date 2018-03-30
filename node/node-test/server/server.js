// load express
const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'page not found',
    name: 'todo app v1.0'
  });
});

// get /users
app.get('/user', (req, res) => {
  res.send({
    name: 'lethisa',
    age: 27
  }, {
    name: 'putri',
    age: 25
  }, {
    name: 'lim',
    age: 23
  });
});

app.listen(3000);

module.exports.app = app;
