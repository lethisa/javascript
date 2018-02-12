////////////////////////
// PRIMITIVE X OBJECT //
////////////////////////

// primitive
var a = 23;
var b = a;
a = 46;

console.log(a); // 46
console.log(b); // 23 => just copy varibale b, not reference anything

// object
var obj1 = {
  name: "john",
  age: 26
};

var obj2 = obj1;
obj1.age = 30; // => new reference point to obj1 - same object
console.log(obj1.age); // 30
console.log(obj2.age); // 30

// function
var age = 27;
var obj = {
  name: "lethisa",
  city: "jakarta"
};

function change(a, b) {
  a = 30; // not change anything
  b.city = "US"; // point reference to object
}
// mutated variable
change(age, obj);
console.log(age);
console.log(obj.city);
