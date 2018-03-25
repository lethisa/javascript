console.log('starting notes.js');

// add module exports - var age
// module.exports.age = 25;

// add module exports - function addNote
// arrow function replace declare function from ES6 - anonymus function
/*module.exports.addNote = () => {
  console.log('addNote');
  return 'New Note';
};*/

/*module.exports.add = (a, b) => {
  return a + b;
};*/


/////////////////////////////////////////////////////////// PREPARE

// load fs module
const fs = require('fs');

// create function - fetch data
var fetchNotes = () => {
  // throw error
  try {
    // read file
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

// create function - save data
var saveNotes = (notes) => {
  // call fs to write into filesystem with JSON
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

/////////////////////////////////////////////////////////// MAIN SCRIPT

///////////////////////////// write
var addNote = (title, body) => {
  // console.log('adding note', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  /*// throw error
  try {
    // read file
    var noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
  } catch (e) {
    console.log('ceate new file');
  }*/

  // validate duplicate data - regular syntax
  /*  var duplicateNotes = notes.filter((note) => {
      return note.title === title;
    });
  */

  // validate duplicate data - ES6 syntax
  var duplicateNotes = notes.filter((note) => note.title === title);
  // add if no duplicate
  if (duplicateNotes.length === 0) {
    notes.push(note);
    /*// call fs to write into filesystem with JSON
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));*/
    saveNotes(notes);
    return note;
  }
};

///////////////////////////// list
var getAll = () => {
  console.log('getting all notes');
};

///////////////////////////// remove
var removeNote = (title) => {
  // fetch notes
  var notes = fetchNotes();
  // filter notes, remove title with arguments
  var filterNotes = notes.filter((note) => note.title !== title);
  // save new notes array
  saveNotes(filterNotes);

  return notes.length !== filterNotes.length;
};

///////////////////////////// read
var getNote = (title) => {
  var notes = fetchNotes();
  var filterNotes = notes.filter((note) => note.title === title);
  return filterNotes[0];
};

/////////////////////////////////////////////////////////// MODULE

var logNote = (note) => {
  console.log('--');
  console.log(`title: ${note.title}`);
  console.log(`body: ${note.body}`);
};


module.exports = {
  // in ES6 addNote: addNote
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
