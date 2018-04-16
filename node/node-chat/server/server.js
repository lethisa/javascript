////////////////////////////////////////////////////////////////// INIT

// load module
const path = require('path');
const http = require('http');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');
const {
  Users
} = require('./utils/users');
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
var users = new Users();

////////////////////////////////////////////////////////////////// SOCKET

io.on('connection', (socket) => {
      console.log('new user connected');

      // join
      socket.on('join', (params, callback) => {
        if (!isRealString(params.name) || !isRealString(params.room)) {
          return callback('name and room are required');
        }

        socket.join(params.room);
        users.removeUser(socket.id);
        users.addUser(socket.id, params.name, params.room);

        io.to(params.room).emit('updateUserList', users.getUserList(params.room));
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
          // console.log('create message', message);
          var user = users.getUser(socket.id);

          if (user && isRealString(message.text)) {
              io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
            }

            callback('');

          });

        // event listener - createLocationMessage
        socket.on('createLocationMessage', (coords) => {
          var user = users.getUser(socket.id);

          if (user) {
            io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));
          }

        });

        // event disconnect
        socket.on('disconnect', () => {
          var user = users.removeUser(socket.id);

          if (user) {
            io.to(user.room).emit('updateUserList', users.getUserList(user.room));
            io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left`));
          }
        });
      });

    ////////////////////////////////////////////////////////////////// CONFIG

    app.use(express.static(publicPath)); server.listen(3000, () => {
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
