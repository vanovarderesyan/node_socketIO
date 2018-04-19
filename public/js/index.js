var socket = io();

socket.on('connect',function(){
    console.log('connection to server')
})

socket.on('disconnect',function (){
    console.log('disconnect server')
})

socket.on('newEmail',function( email){
    console.log(email);
})

socket.emit('createEmail',{
    from : 'guest@mail.com',
    text : "hello"
})