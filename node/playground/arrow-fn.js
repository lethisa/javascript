// arrow function - statement
var square = (x) => {
  var result = x * x;
  return result;
};

console.log(square(9));

// arrow function - expression
// if one argument just remove () and {}
var blog = (x) => x * x;
console.log(blog(5));

// arrow function - object

// regular object
var user = {
  name: 'putri',
  sayHi: () => {
    // console.log(arguments); // cannot bind arguments
    console.log(`Hi, i'm ${this.name}`); // arrow function cannot use this
  },
  // alternate
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi, i'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt(1,2,3);
