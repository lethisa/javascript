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

// yargs => build interactive command line tools by parsing arguments and generating an elegant user interface
const yargs = require('yargs');

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
// var command = process.argv[2];

const titleOptions = {
  describe: 'title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'content body',
  demand: true,
  alias: 'b'
};

// create yargs var
const argv = yargs
  .command('add', 'add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'list all notes')
  .command('read', 'read a note', {
    title: titleOptions
  })
  .command('remove', 'remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];
// get argv - command line argument
// console.log(process.argv);
console.log('command: ', command);
// console.log('process', process.argv);
// console.log('yargs',argv);

if (command === 'add') {
  // console.log('adding new note');
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('note created');
    notes.logNote(note);
  } else {
    console.log('note title taken');
  }
} else if (command === 'list') {
  // console.log('listing all note');
  var allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  // console.log('reading note');
  note = notes.getNote(argv.title);
  if (note) {
    console.log('note found');
    notes.logNote(note);
  } else {
    console.log('note not found');
  }
} else if (command === 'remove') {
  // console.log('removing note');
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'note was removed' : 'note not found';
  console.log(message);
} else {
  console.log('command:  not recognized');
}
