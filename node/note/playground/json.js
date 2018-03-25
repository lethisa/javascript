/*var obj = {
  name: 'lethisa'
};*/

// JSON => convert object to string
// var stringObj = JSON.stringify(obj);
// // type of stringObj
// console.log(typeof stringObj);
// console.log(stringObj);

// JSON format
// var personString = '{"name":"lethisa","age":25}';
// // convert string to object
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

// store and load data
const fs = require('fs');
// js object
var originalNote = {
  title: 'some title',
  body: 'some body'
};

// originalNoteString => write file to notes.json
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
// read content from notes.json
var noteString = fs.readFileSync('notes.json');
// note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
