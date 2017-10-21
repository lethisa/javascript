//////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
