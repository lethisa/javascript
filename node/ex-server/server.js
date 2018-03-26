// load express module
const express = require('express');

// use express js
var app = express();

// make static web - access folder
app.use(express.static(__dirname + '/public'));

// http route handler
app.get('/', (req, res) => {
  // res.send('<h1>Hai Express!</h1>');
  res.send({
    name: 'lethisa',
    likes: [
      'reading',
      'watching'
    ]
  });
});

// route about
app.get('/about', (req, res) => {
  res.send('about page');
});

// bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'unable to handle request'
  });
});

// listen server
app.listen(3000, () => {
  console.log('server is up on port 3000');
});
