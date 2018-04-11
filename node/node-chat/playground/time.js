var moment = require('moment');

var date = moment();

console.log(date);
console.log(moment().startOf('hour').fromNow());
console.log(date.format('MMM YYYY'));
