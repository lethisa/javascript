/* ############################################################################################################# */
// Lecture: variables
/*
var name = 'Jhon';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

/* ############################################################################################################# */
// Lecture : variables 2
/*
var name = 'Jhon';
var age  = 26;

// variables coercion
// console.log(name + age);
// console.log(age + age);

var job, isMarried;

// console.log(job);

// old variables
job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + ' .Is he married ' + isMarried + '.');

// variables mutation
age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + ' .Is he married ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + ' .Is he married ' + isMarried + '.');
*/

/* ############################################################################################################# */
// Lecture: operators
/*
var now = 2016;
var birthYear = now - 26;
// 2016 - 26 = 1990

birthYear = now - 26 * 2;
// 2016 - 52 = 1964
// precedence

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageJohn = ageJohn + 1;
// similar operation
ageMark *= 2;
ageMark = ageMark * 2;
// similar operation
console.log(ageJohn);
console.log(ageMark);
*/

/* ############################################################################################################# */
// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

// condition
if (isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + ' will + hopefully marry soon!');
}

isMarried = false;
if (isMarried) {
  console.log('YES');
}else {
  console.log('NO');
}

// == type coercion
// === not type coercion
if (23 == '23') {
  console.log('Something to print...');
}
*/

/* ############################################################################################################# */
// Lecture: booelan logic and switch
/*
var age = 16;

if (age < 20) {
  console.log('John is a teenager');
} else if (age > 20 && age < 30) {
  console.log('John is a young man');
} else {
  console.log('John is a man');
}

var job = 'teacher';
job = prompt('What does john do?');

switch (job) {
  case 'teacher':
    console.log('John teaches kids');
    break;
    //break looping statements
  case 'driver':
    console.log('John drives a car in Lisbon');
    break;
  case 'cop':
    console.log('John helps fight crime');
    break;
  default:
    console.log('John does something else');
}
*/

/* ############################################################################################################# */
// CODING CHALLENGE 1
/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/
/*
// solution
var heightJohn = 170;
var heightMike = 195;
var ageJohn = 36;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;

if (scoreJohn > scoreMike) {
  console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn) {
  console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreJohn === scoreMike) {
  console.log('There is a draw!');
}

var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log('John wins the game with ' + scoreJohn + ' points!');
}else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log('Mike wins the game with ' + scoreMike + ' points!');
}else {
  console.log('It\'s a draw!');
}
*/

/* ############################################################################################################# */
// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
  var age = 2016 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);

// declare function
function yearUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + 'retires in ' + retirement + ' years');
  } else {
    console.log(name + ' is already retired');
  }
}

// calling function
yearUntilRetirement('John', 1990);
yearUntilRetirement('Mike', 1969);
yearUntilRetirement('Mary', 1948);
*/

/* ############################################################################################################# */
// Lecture: Statements and Expressions
/*
function someFun(par) {
  //code
}

var someFun = function(par) {
  //code
};

//expressions
var x = 3;
3 + 4;

//statements
if (x === 5) {
  //do something
}
*/

/* ############################################################################################################# */
// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];

console.log(names[0]);
//mutation
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];
// function to add value in last arrays
john.push('blue');
// function to add value in first arrays
john.unshift('Mr');
// remove last elements on last array
john.pop();
// remove first elements on first array
john.shift();
// order number array elements
john.indexOf('Smith');

console.log(john);

// check elements in arrays
if (john.indexOf('teacher') === -1) {
  console.log('Jhon is NOT a teacher');
}
*/

/* ############################################################################################################# */
// Lecture: Objects
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  job: 'teacher',
  isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);
// data mutation
var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

// different way to declare Objects
// var jane = new Object();
var jane = {};
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'Designer';
jane['isMarried'] = true;

console.log(jane);
*/

/* ############################################################################################################# */
// Lecture: Objects and methods
// v 1.0
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  // method 1
  calculateAge:function(yearOfBirth){
    return 2016 - yearOfBirth;
  }
  // method 2
  calculateAge: function() {
    return 2016 - this.yearOfBirth;
  }
};

// case 1
//console.log(john.calculateAge(1970));
// case 2
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
// variable on Objects
console.log(john);
*/

// v 2.0
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  // method 1
  calculateAge: function() {
    //return 2016 - this.yearOfBirth;
    this.age = 2016 - this.yearOfBirth;
  }
};
// call methods
john.calculateAge();
console.log(john);
console.log(john.age);

var mike = {
  yearOfBirth: 1950,
  calculateAge: function() {
    this.age = 2016 - this.yearOfBirth;
  }
};

mike.calculateAge();
console.log(mike);
*/

/* ############################################################################################################# */
// Lecture: Loops
// counter + condition + itteration
// 0, true, print 0, update i to 1
/*
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bib'];
for (var j = 0; j < names.length; j++) {
  console.log(names[j]);
}

for (var k = names.length - 1; k >= 0; k--) {
  console.log(names[k]);
}

// while Loops
var l = 0;
while (l < names.length) {
  console.log(names[l]);
  l++;
}

// breaks
for (var m = 0; m <= 5; m++) {
  console.log(m);

  if (m === 3) {
    break;
  }
}

// continues
for (var n = 0; n <= 5; n++) {
  if (n === 3) {
    continue;
  }
  console.log(n);
}
*/

/* ############################################################################################################# */
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/
/*
function printFullAge (years) {
  var ages = [];
  var fullAges = [];

  for (var p = 0; p < years.length; p++) {
    ages[p] = 2016 - years[p];
  }

  for (var q = 0; q < ages.length; q++) {
    if (ages[q] >= 18) {
      console.log('Person ' + (q + 1) + ' is ' + ages[q] + ' years old, and is of full age');
      fullAges.push(true);
    } else {
      console.log('Person ' + (q + 1) + ' is ' + ages[q] + ' years old, and is NOT of full age');
      fullAges.push(false);
    }
  }
  return fullAges;
}

var years = [2001, 1985, 2014, 1973];
var fullA = printFullAge(years);
var fullB = printFullAge([2012, 1915, 1999]);

console.log(fullA);
console.log(fullB);
*/

/* ############################################################################################################# */
// Lecture:
