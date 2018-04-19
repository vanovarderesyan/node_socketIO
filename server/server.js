const path = require('path');
const express = require('express');
const http = require('http')
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname + '/../public/');
var app = express();
var server = http.createServer(app)
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new connection');
    socket.emit('newEmail',{
        from : "vano.varderesyan@mail.ru",
        text : "barev"
    });

    socket.on('createEmail',function(newEmail){
        console.log(newEmail)
    })

    socket.on('disconnect', () => {
        console.log('client disconnect')
    })
})

server.listen(port, () => {
    console.log(`Service is up on ${port}`)
})