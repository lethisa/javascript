////////////////////////////////////////////////////////////////// INIT

// load module
const path = require('path');
const http = require('http');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');
const {
  generateMessage,
  generateLocationMessage
} = require('./utils/message');

const {
  isRealString
} = require('./utils/validation');

// variable
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

////////////////////////////////////////////////////////////////// SOCKET

io.on('connection', (socket) => {
  console.log('new user connected');

  // join
  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      callback('name and room are required');
    }

    socket.join(params.room);
    // socket.leave('room');
    // io.emit -> io.to('room').emit
    // socket.broadcast.emit -> socket.broadcast.to('room').emit
    // socket.emit -> specific user

    // user join
    socket.emit('newMessage', generateMessage('admin', 'welcome to chat app'));
    // brodcast info join
    socket.broadcast.to(params.room).emit('newMessage', generateMessage('admin', `${params.name} has joined`));
    callback();
  });



  // event listener - createMessage
  socket.on('createMessage', (message, callback) => {
    console.log('create message', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('');

  });

  // event listener - createLocationMessage
  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('user', coords.latitude, coords.longitude));
  });

  // event disconnect
  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });
});

////////////////////////////////////////////////////////////////// CONFIG

app.use(express.static(publicPath));
server.listen(3000, () => {
  console.log(`server is up on port ${port}`);
});

////////////////////////////////////////////////////////////////// EXAMPLE

// console.log(__dirname + '/../public');
// console.log(publicPath);

// socket.on('createEmail', (newEmail) => {
//   console.log('createEmai', newEmail);
// });

// socket.emit('newEmail', {
//   from: 'let@gmail.com',
//   text: 'hai',
//   createAt: 123
// });

// socket.emit('newMessage', {
//   from: 'budi',
//   text: 'see you',
//   createdAt: 123
// });

// socket.broadcast.emit('newMessage',{
//     from: message.from,
//     text: message.text,
//     createdAt: new Date().getTime()
// });
