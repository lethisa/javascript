//////////////////////////
// FUNCTION CONSTRUCTOR //
//////////////////////////

/*var john = { // => regular creation object
  name: "john",
  yearOfBirth: 1990,
  job: "teacher"
};
console.log(john);*/

////////////////////// create blueprint - function constructor
var Person = function(name, yearOfBirth, job) {
  this.name = name; // => parameter from function
  this.yearOfBirth = yearOfBirth;
  this.job = job;
    /*this.calculateAge = function() {
      console.log(2016 - this.yearOfBirth);
    };*/
};
////////////////////// inheritance object
Person.prototype.calculateAge =
  function() {
    console.log(2016 - this.yearOfBirth);
  };

////////////////////// create john object - instance
var jane = new Person("Jane", 1991, "police"); // new - new empty object created
jane.calculateAge();
var mike = new Person("Mike", 1993, "designer");
mike.calculateAge();
var mark = new Person("Markm 1967", "sailor");
mark.calculateAge();
