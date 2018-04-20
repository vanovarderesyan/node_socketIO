const path = require('path');
const express = require('express');
const http = require('http')
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname + '/../public/');
var app = express();
var server = http.createServer(app)
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new connection');

    socket.on('createMessage',(message,cb)=>{
        cb();
        io.emit('newMessage',generateMessage(message.from,message.text))
    })

    socket.on('disconnect', () => {
        console.log('client disconnect')
    })

    // socket.emit('newMessage',generateMessage('Name','message text'),function(data){
    //     console.log(data);
    // });

   // socket.broadcast.emit('newMessage',generateMessage('name_broadcast','message broadcast'));
})

server.listen(port, () => {
    console.log(`Service is up on ${port}`)
})