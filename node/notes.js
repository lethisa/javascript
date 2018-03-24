console.log('starting notes.js');

// add module exports - var age
module.exports.age = 25;

// add module exports - function addNote
// arrow function replace declare function from ES6 - anonymus function
module.exports.addNote = () => {
  console.log('addNote');
  return 'New Note';
};

module.exports.add = (a, b) => {
  return a + b;
};
