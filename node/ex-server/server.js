// load express module
const express = require('express');
// load handlebar module
const hbs = require('hbs');

// use express js
var app = express();

// hbs partials
hbs.registerPartials(__dirname + '/views/partials');
// hbs helper
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

// use hbs
app.set('view engine', 'hbs');

// make static web - access folder
app.use(express.static(__dirname + '/public'));

// http route handler - home
app.get('/', (req, res) => {
  // res.send('<h1>Hai Express!</h1>');
  // res.send({
  //   name: 'lethisa',
  //   likes: [
  //     'reading',
  //     'watching'
  //   ]
  // });
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',
    // currentYear: new Date().getFullYear()
  });
});

// route about
app.get('/about', (req, res) => {
  // res.send('about page');

  // render from hbs template
  res.render('about.hbs', {
    pageTitle: 'About Page',
    // currentYear: new Date().getFullYear()
  });
});

// bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'unable to handle request'
  });
});

// template engine


// listen server
app.listen(3000, () => {
  console.log('server is up on port 3000');
});
