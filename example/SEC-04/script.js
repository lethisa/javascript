/////////////
// BOOELAN //
/////////////

// BOOELAN LOGIC
// AND && => true if ALL are true
// OR || => true if ONE is true
// NOT ! => inverts true/ false value

var age = 25;

if (age < 20) {
  console.log("John is a teenager");
} else if (age > 20 && age < 30) {
  console.log("John is a young man");
} else {
  console.log("John is a man");
}

////////////
// switch //
////////////

var job = "teacher";

job = prompt("What does John do?");

switch (job) {
  case "teacher":
    console.log("John teaches kids");
    break;
  case "driver":
    console.log("John drives a car in lisbon");
    break;
  case "cop":
    console.log("John helps fight crime");
    break;
  default:
    console.log("John does something else");
}
