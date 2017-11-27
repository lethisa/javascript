/* ############################################################################################################# */
// Lecture: Hoisting

// function declaration - hoisting
/*
calculateAge(1965);

function calculateAge (year) {
  console.log(2016 - year);
}

// function expresion
// retirement(1965);
var retirement = function (year) {
  console.log(65 - (2016 - year));
};

retirement(1965);

// variable
// console.log(age); undefined
var age = 23;
console.log(age);

// global execution context object + execution context object
function foo () {
  // console.log(age); undefined
  var age = 65;
  console.log(age);
}
// global execution context object + execution context object
foo();
console.log(age);
*/

/* ############################################################################################################# */
// Lecture: Scoping

// First Scooping Example
/*
var a = 'Hello!';
first();

function first () {
  var b = 'Hi!';
  second();

  function second () {
    var c = 'Hey!';
    console.log(a + b + c);
  }
}
*/

// Difference bettween execution stack and scope chain
/*
var a = 'Hello!';
first();

console.log(a);

function first () {
  var b = 'Hi!';
  console.log(b);
  second();

  function second () {
    var c = 'Hey!';
    console.log(c);
    third();
  }
}
// execution stack vs global scope, variable c undefined because not in scope/ global
function third () {
  var d = 'John';
  // console.log(c);
  console.log(a + d);
}
*/

/* ############################################################################################################# */
// Lecture: The this keyword

// console.log(this);
/*
calculateAge(1985);

function calculateAge (year) {
  console.log(2016 - year);
  console.log(this);
}

var john = {
  name: 'John',
  yaerOfBirth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(2016 - this.yaerOfBirth);

    function innerFunction () {
      console.log();
    }
    innerFunction();
  }

};

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

// mike.calculateAge() = john.calculateAge();
// mike.calculateAge();
mike.name();
*/

/* ############################################################################################################# */
// Lecture: The this keyword
