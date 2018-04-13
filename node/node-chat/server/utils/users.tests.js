const expect = require('expect');

const {
  Users
} = require('./users');

describe('Users', () => {

  beforeEach(() => {
    users = new User();
    users.users = [{
      id: '1',
      name: 'make',
      room: 'node'
    }, {
      id: '2',
      name: 'mike',
      room: 'java'
    }, {
      id: '3',
      name: 'bill',
      room: 'node'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'jane',
      room: 'office'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toBeFalsy([user]);
  });

  it('should rturn names for room node', () => {
    var userList = users.getUserList('node');

    expect(userList).toBeFalsy(['make', 'bill']);
  });
});
