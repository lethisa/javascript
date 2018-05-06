///////////////
// FUNCTIONS //
///////////////

function calculateAge(yearOfBirth) {
  var age = 2015 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

console.log(ageJohn);
console.log(ageMary);
console.log(ageMike);

function yearUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years');
  } else {
    console.log(name + ' is already retired');
  }

}

yearUntilRetirement('John', 1990);
yearUntilRetirement('Mary', 1910);
