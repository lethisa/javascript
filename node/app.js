console.log('starting app.js');

// load File System module
const fs = require('fs');

// load OS module
// const os = require('os');
// get OS information
// var user = os.userInfo();

// load module from our project - note.js
const notes = require('./notes.js');
// calling function addNote from notes.js
// var res = notes.addNote();
// console.log(res);
// calling function add from notes.js
// console.log('Result: ' + notes.add(9, -2));

// load lodash module
const _ = require('lodash');
// using lodash library
// _.isString
// console.log(_.isString(true));
// console.log(_.isString('lethisa'));

// _.uniq - filter duplicate array
// var filteredArray = _.uniq(['lethisa',1,'lethisa',1,2,3,4]);
// console.log(filteredArray);

// original line
/*fs.appendFile('greetings.txt','Hello World !');*/

// option one - using text concatenate
/*fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', function(err) {
  if (err) {
    console.log('Unable to write to file');
  }
});*/

// option one - using ES6 template string
// call var age from notes.js
/*fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}` , function(err) {
  if (err) {
    console.log('Unable to write to file');
  }
});*/

// option two
/*fs.appendFileSync('greetings.txt','Hello World !');*/

// ============================ MAIN SCRIPT
// argv => argument vector
var command = process.argv[2];
// get argv - command line argument
// console.log(process.argv);
console.log('command: ', command);

if (command === 'add') {
  console.log('adding new note');
} else if (command === 'list') {
  console.log('listing all note');
} else if (command === 'read') {
  console.log('reading note');
} else if (command === 'remove') {
  console.log('removing note');
} else {
  console.log('command:  not recognized');
}

// yargs => build interactive command line tools by parsing arguments and generating an elegant user interface
