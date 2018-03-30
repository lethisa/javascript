// load
const utils = require('./utils');
// load expect module
const expect = require('expect');

// test add
it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`expected 44, but got ${res}`);
  // }
});

// test square
it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
  // if (res !== 9) {
  //   throw new Error(`Expected 9, but got ${res}`);
  // }
});

// it('should expect same value',()=>{
//   // expect(12).toNotBe(11);
//   // expect({name: 'lethisa'}).toEqual({name: 'lethisa'});
//   // expect([2,3,4]).toInclude(5);
//   expect({
//     name:'lethisa',
//     age:25,
//     location:'usa'
//   }).toInclude({
//     age:25
//   });
// });

// should verify first and last names are set
// assert it include firstName and lastName with proper values
it('should set firstName and lastName', () => {
  var user = {
    location: 'usa',
    age: 25
  };

  var res = utils.setName(user, 'lethisa putri');

  expect(res).toInclude({
    firstName: 'lethisa',
    lastName: 'putri'
  });
});
