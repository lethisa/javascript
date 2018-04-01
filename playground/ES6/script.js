///////////////////
// let and const //
///////////////////

// ES5
/*var name5 = 'Lethisa Putri';
name5 = 'lethisa cantik';
console.log(name5);*/

// ES6
/*const name6 = 'Andrew Mark'; // const = consistent value
let age6 = 23; // in old for var*/
// name6 = 'Lethisa Putri';
/*age6 = 25;
console.log(name6);
console.log(age6);*/

// ES5
/*function driversLicense(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1999;

    // console.log(firstName + ', born in ' + yearOfBirth);
  }
  console.log(firstName + ', born in ' + yearOfBirth);
  // function scope
}

driversLicense(true);*/

// ES6
/*function driversLicense6(passedTest) {
  if (passedTest) {
    let firstName = 'John';
    const yearOfBirth = 1999;

    // console.log(firstName + ', born in ' + yearOfBirth);
  }
  console.log(firstName + ', born in ' + yearOfBirth);
  // gt error because - block scope
}

driversLicense6(true);*/

////////////////////
// block and IIFE //
////////////////////

// ES6
/*{
  const a = 1;
  let b = 2;
  var c =3;

  // block scope
  console.log(a + b);
}*/

// console.log(a + b); // not accesible
// console.log(c); // var not include block scope

// ES5 - Data Privacy - IIFE
/*(function() {
  var c = 3;

  console.log(c);
})();*/

// console.log(c);

/////////////
// strings //
/////////////

/*let firstName = 'John';
let lastName = 'smith';
const yearOfBirth = 1999;

function calcAge(year) {
  return 2016 - year;
}*/

// ES5
// console.log('This is ' + firstName + ' ' + lastName + ', was born in ' + yearOfBirth + ', today, his age ' + calcAge(12));

// ES6 - template literals
// console.log(`His name ${firstName} ${lastName} and his ${calcAge(13)} old`);

// startWith
// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// endWith
// console.log(n.endsWith('th'));
// includes
// console.log(n.includes(' '));
// repeat
// console.log(firstName.repeat(5));

////////////////////
// arrow function //
////////////////////

/*const years = [1990, 1989, 1986, 1298];

// ES5
var ages5 = years.map(function(el) {
  return 2016 - el;
});

console.log(ages5);*/

// ES6
/*let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `element ${index + 1}: ${2016 - el}.`);

console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `age element ${index + 1}: ${2016 - el} and ${age}`;

});

console.log(ages6);*/

//////////////////////////////
// arrow function advantage //
//////////////////////////////

// use box in HTML

/*// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this; // some hack
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
};

box5.clickMe(); // undefined*/

// ES6
/*const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {

    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
};

box6.clickMe(); // get this in surounding*/

// ES6 - other example
/*var box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', function() {
      var str = `This is box number ${this.position} and it is ${this.color}`;
      alert(str);
    });
  }
};

box66.clickMe(); // undefined again*/

/*function Person(name) {
  this.name = name;
}*/

// ES5
/*Person.prototype.myFriends5 =
 function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this));
  console.log(arr);
};

var friends = ['bob', 'jane', 'mike', 'tyla'];
new Person('John').myFriends5(friends);*/

// ES6
/*Person.prototype.myFriends6 =
  function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}` );
    console.log(arr);
  };

var friends = ['bob', 'jane', 'mike', 'tyla'];
new Person('Mike').myFriends6(friends);*/

///////////////////
// destructuring //
///////////////////

// ES5
/*var john = ['John', 26];
var name = john[0];
var age = john[1];*/

// ES6
/*const [name, age] = ['John',25];
console.log(name);
console.log(age);

const obj ={
  firstName: 'John',
  lastName:'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);*/

/*function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);*/

///////////
// array //
///////////

// use box HTML
/*const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
});*/

// ES6
/*const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'yellow');*/

// ES5
/*for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === 'box blue') {
    continue;
  }
  boxesArr5[i].textContent = 'I changed to blue!';
}*/

// ES6 - for of
/*for (const cur of boxesArr6) {
  if (cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = 'I changed to red';
}*/

// ES5
/*var ages = [12, 14, 15, 16, 23, 13];
var full = ages.map(function(cur) {
  return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);*/

// ES6
/*console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));*/

/////////////////////
// spread operator //
/////////////////////

/*function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(12, 14, 23, 22);
console.log(sum1);*/

// ES5
/*var ages = [14, 34, 11, 10];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);*/

// ES6
/*const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['john', 'jane', 'mark'];
const familyMiller = ['marry', 'bob', 'lik'];

const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');*/


////////////////////
// rest parametes //
////////////////////

// ES5
/*function isFullAge5(limit) {
  // console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur) {
    console.log(2016 - cur >= limit);
  });
}*/

// isFullAge5(21, 1990, 1999, 1967, 1909, 2001);

// ES6
/*function isFullAge6(limit,...years) {
  years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1999,1987, 1986, 1986);*/

////////////////////////
// default parameters //
////////////////////////

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

  lastName === undefined ? lastName = 'Smith' : lastName;
  nationality === undefined ? nationality = 'USA' : nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

// ES6
