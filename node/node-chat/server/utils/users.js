// [{
//   id: '',
//   name: '',
//   room: ''
// }];

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription() {
//     return `${this.name} is 1 year(s) old`;
//   }
// }
//
// var me = new Person('lethisa', 25);
// console.log(me.name);
// console.log(me.age);
//
// var description = me.getUserDescription();
// console.log(description);

class Users {
  constructor() {
    this.user = [];
  }
  addUser(id, name, room) {
    var user = {
      id,
      name,
      room
    };
    this.user.push(user);
  }
  removeUser(id) {

  }
  getUser(id) {

  }
  getUserList(room) {
    var users = this.users.filter((user) => {
      return user.room === room;
    });
    var nameArray = users.map((user) => {
      return user.name;
    });

    return nameArray;
  }
}

module.exports = {
  Users
};
