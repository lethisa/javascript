////////////////////////
// LOOP AND ITERATION //
////////////////////////

// for loop
for (var i = 0; i < 10; i++) { // initial - condition - counter
  console.log(i);
}

var names = ['John', 'Jane', 'Mark', 'Bob', 'Kart'];
for (var x = 0; x < names.length; x++) { // length => number
  console.log(names[x]);
}

for (var y = names.length - 1; y >= 0; y--) {
  console.log(names[y]);
}

// while loops
var z = 0;
while (z < names.length) {
  console.log(names[z]);
  z++;
}

// break
for (var a = 1; a <= 5; a++) {
  console.log(a);

  if (a === 3) {
    break;
  }
}

// continue
for (var b = 1; b <= 5; b++) {

  if (b === 3) {
    continue;
  }
  console.log(b);
}
