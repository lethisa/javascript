//////////////////////////////////
// lecture: if/ else statements //
//////////////////////////////////

var name = 'John';
var age = 26;
var isMarried = 'no';
console.log(age);

// if statements
if (isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopfully marry soon');
}


isMarried = false;
// if statements with boolean
if (isMarried) {
  console.log('YES');
} else {
  console.log('NO');
}

var a = 23;
if (a == '23') { // variable coercion
  console.log('COERCION VARIABLE');
}

var b = 26;
if (b === '26') { // === identical
  console.log('IDENTICAL');
} else {
  console.log('NOT IDENTICAL');
}
