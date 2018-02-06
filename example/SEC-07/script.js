///////////
// ARRAY //
///////////

var names = ["John", "Jane", "Mark"]; // one type data
var years = new Array(1990, 1969, 1998); // one type data

console.log(names[0]);
console.log(years[1]);

//mutated variable
names[1] = "Janes";
console.log(names[1]);

// multiple data types on array
var john = ["John", "Smith", 1999, "teacher", false];

// push => add element on end of array
john.push("Blue");
console.log(john);

// unshift => add element to the beginning array
john.unshift("Mr.");
console.log(john);

// pop => remove the last element of the array
john.pop();
console.log(john);

// shift => remove beginning element of the array
john.shift();
console.log(john);

// index of => return position of the element that pass
//alert(john.indexOf("Smith"));

if (john.indexOf("police") === -1) { // -1 => not in array
  console.log("John is not a teacher");
}
