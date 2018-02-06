// lecture: operators
var now = 2016;
var birthYear = now - 26;
// variable mutation
birthYear = now - 26 * 2; // precedents of operators
console.log(birthYear);

// operator precedents use parenthesis/ grouping (...)
var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26
// ageJohn = 26

ageJohn++;
//ageJohn = ageJohn + 1;
ageMark *= 2;
// ageMark = ageMark * 2;
console.log(ageJohn);
console.log(ageMark);
