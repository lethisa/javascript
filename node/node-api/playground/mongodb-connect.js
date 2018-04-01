// load mongoDB
const MongoCLient = require('mongodb').MongoClient;

MongoCLient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
  if (err) {
    return console.log('unable connect to mongoDB server');
  }
  console.log('connected to mongoDB server');

  // add

  // db.collection('Todos').insertOne({
  //   text: 'text',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // add
  db.collection('users').insertOne({
    name: 'lethisa',
    age:25,
    location:'USA'
  },(err,result)=>{
    if (err) {
      return console.log('unable to insert users', err);
    }
    console.log(result.ops);
  });

  db.close();
});
