const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

var db = {
  saveUser: expect.createSpy()
};
app.__set__('db', db);

describe('App', () => {
  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('lethisa', 25);
    expect(spy).toHaveBeenCalledWith('lethisa', 25);
  });

  it('should call saveUser with user object', () => {
    var email = 'lethisa@gmail.com';
    var password = '123';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });
});
