var mongoose = require('mongoose');

// scheme
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

/*var user = new User({
  email: 'let@gmail.com'
});

user.save().then((doc) => {
  console.log('user saved', doc);
}, (e) => {
  console.log('unable to save', e);
});*/

// exports
module.exports = {
  User
};
