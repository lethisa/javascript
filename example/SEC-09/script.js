///////////////////////
// OBJECT AND METHOD //
///////////////////////
var john = {
  name: "John",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false,
  family: ["Jane", "Mark", "Bob"],

  calculateAge: function(yearOfBirth) { // method
    return 2016 - yearOfBirth;
  }
};

console.log(john);
console.log(john.family);
console.log(john.family[2]);
//console.log(john.calculateAge(1990));
