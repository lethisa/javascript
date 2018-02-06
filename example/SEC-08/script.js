/////////////////////////
// OBJECT AND PROPERTI //
/////////////////////////

var john = { // => john is object
  name: "John", // => properti
  lastName: "Smith",
  yearOfBirth: 1990,
  job: "teacher",
  isMarried: false
};

console.log(john);
console.log(john.lastName);
console.log(john["lastName"]);

var x = "job";
console.log(john[x]);

// variable mutation
john.lastName = "Miller";
console.log(john["lastName"]);

// create object different method
var jane = new Object();
jane.name = "Jane";
jane.lastName = "Smither";
jane.age = 29;
jane.job = "police";
jane.isMarried = true;

console.log(jane);
