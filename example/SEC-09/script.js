///////////////////////
// OBJECT AND METHOD //
///////////////////////

// version 1
var john = {
  name: "John",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false,
  family: ["Jane", "Mark", "Bob"],

  calculateAge: function() { // method => function in object
    return 2016 - this.yearOfBirth; // this refers to object
  }
};

console.log(john);
console.log(john.family);
console.log(john.family[2]);
//console.log(john.calculateAge(1991));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);

// version 2
var jane = {
  name: "Jane",
  lastName: "Smothie",
  yearOfBirth: 1980,
  job: "police",
  isMarried: true,
  family: ["Janes", "Marker", "Boby"],

  calculateAge: function() {
    this.age = 2016 - this.yearOfBirth;
  }
};

jane.calculateAge();
console.log(jane);
