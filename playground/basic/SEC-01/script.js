////////////////////////
//lecture : variables //
////////////////////////


//primitive javascript data type
var name = 'John';
console.log(name);
// string : sequence of character, used for text
var lastName = 'Smith';
console.log(lastName);
// number : floating point numbers, for decimal and integers
var age = 26;
console.log(age);
// booelan : logical data type that can only be true or false
var fullAge = false;
console.log(fullAge);

///////////////////////////
// lecture : variables 2 //
///////////////////////////

// type coercion - convert number to string
console.log(name + age); // string
console.log(age + age); // number

var job, isMarried; // not yet declared
console.log(job); // undefined

job = 'teacher'; // not need declared var again
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + ' ,is he married? ' + isMarried);

// variable mutation
age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + ' ,is he married? ' + isMarried);

// get data from console
lastName = prompt('What is the last name?');
console.log(lastName);

// alert box
alert(name + ' is a ' + age + ' years old ' + job + ' ,is he married? ' + isMarried);
