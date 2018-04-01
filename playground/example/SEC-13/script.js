//////////
// THIS //
//////////

// refer to windows object
// console.log(this);

calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this); // =? point to windows object
}

var john = {
  name: 'john',
  yearOfBirth: 1999,
  calculateAges: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    function innerFunction () {
      console.log(this); // => refer to windows object because regular function
    }
    innerFunction();
  }
};

john.calculateAges();

var mike = {
  name: 'Mike',
  yearOfBirth: 1934
};

// method borrowing
mike.calculateAges = john.calculateAges;

mike.calculateAges();
