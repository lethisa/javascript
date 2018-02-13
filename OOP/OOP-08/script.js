/////////////////////
// BIND-CALL-APPLY //
/////////////////////

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' +
        timeOfDay + ', Ladies and gentlemen! Im ' +
        this.name + ' Im a ' +
        this.job + ' and Im ' +
        this.age + ' years old');
    } else if (style === 'friendly') {
      console.log('Hey! What is up? Im ' +
        this.name + ' Im a ' +
        this.job + ' and Im ' +
        this.age + ' years old. Have a nice ' +
        timeOfDay);
    }
  }
};

var emily = {
  name: 'Emily',
  age:35,
  job:'designer'
};

john.presentation('formal','morning');
// method borrowing - call
john.presentation.call(emily, 'friendly','afternoon');
// apply - work in array
john.presentation.apply(emily,['friendly','evening']);
// bind, like call but bind dont immediately call function - store
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');

// example ============================================
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

// callback function
function calculateAge(el) {
  return 2016 - el;
}

// callback function
function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);
