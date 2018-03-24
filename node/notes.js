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


var addNote = (title, body) => {
  console.log('adding note', title, body);
};

var getAll = () => {
  console.log('getting all notes');
};

var removeNote = (title) => {
console.log('removing',title);
};

var getNote = (title) => {
  console.log('getting note', title);
};

module.exports = {
  // in ES6 addNote: addNote
  addNote,
  getAll,
  getNote,
  removeNote
};
