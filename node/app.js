console.log('starting app.js');

// load File System module
const fs = require('fs');
// load OS module
const os = require('os');
// get OS information
var user = os.userInfo();
// load module from our project - note.js
const notes = require('./notes.js');


// original line
/*fs.appendFile('greetings.txt','Hello World !');*/

// option one - using text concatenate
/*fs.appendFile('greetings.txt', 'Hello ' + user.username + '!' , function(err) {
  if (err) {
    console.log('Unable to write to file');
  }
});
*/
// option one - using ES6 template string
fs.appendFile('greetings.txt', `Hello ${user.username}!` , function(err) {
  if (err) {
    console.log('Unable to write to file');
  }
});

// option two
/*fs.appendFileSync('greetings.txt','Hello World !');*/
