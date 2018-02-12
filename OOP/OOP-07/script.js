//////////////
// CLOSURES //
//////////////

// inner function has always access to the variable and parameters of its outer function, even after the outer function has returned
function retirement(retirementAge) {
  var a = " years left ubtil retirement";
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  };
}

// v1
var retirementUS = retirement(66);
retirementUS(1990);
// v2
retirement(66)(1992);


var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1997);

// apply for previous lesson
function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log("Hello " + name + "what do you do?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name);
    } else {
      console.log("Hello "+ name + "what do you do?");
    }
  };
}

interviewQuestion("teacher")("john");
