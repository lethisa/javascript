/////////////////////////
//OBJECT.CREATE METHOD //
/////////////////////////

var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'tacher';

var jane = Object.create(personProto, {
  name: {
    value: 'Jane'
  },
  yearOfBirth: {
    value: 1968
  },
  job: {
    value: 'designer'
  }
});
console.log(jane);
