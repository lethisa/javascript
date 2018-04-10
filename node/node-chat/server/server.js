////////////////////////////////////////////////////////////////// INIT

const path = require('path');
const http = require('http');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

////////////////////////////////////////////////////////////////// SOCKET

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newEmail', {
    from: 'let@gmail.com',
    text: 'hai',
    createAt: 123
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmai', newEmail);
  });

  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });
});

app.use(express.static(publicPath));
server.listen(3000, () => {
  console.log(`server is up on port ${port}`);
});

////////////////////////////////////////////////////////////////// EXAMPLE

// console.log(__dirname + '/../public');
// console.log(publicPath);
