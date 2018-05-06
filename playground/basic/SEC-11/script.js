//////////////
// HOISTING //
//////////////

// hoisting for function declaration
// function declaration
// function hoisting
calculateAge(1990); // => hoisting - execution phase

function calculateAge(year) { // declaration phase
  console.log(2016 - year);
}

// calculateAge(1999);

// function expression
// retirement(1990); // =>not work

var retirement = function(year) {
  console.log(65 - (2016 - year));
};

retirement(1990);

// variables
console.log(age); // hoisting => undefined
var age = 23;
console.log(age);

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}

foo();
console.log(age);
