var socket = io();

socket.on('connect',function(){
    console.log('connection to server')
})

socket.on('disconnect',function (){
    console.log('disconnect server')
})

socket.on('newMessage',function(message){
    console.log(message);
    var li = $('<li></li>');
    li.text(`${message.from}:${message.text}`)
    $('#message').append(li)
})
 $('#message-from').on('submit',function(e){
    e.preventDefault();
    socket.emit('createMessage',{
        from:'User',
        text: $('[name=message]').val()
    },function(){
        console.log('cb')
    })
 })
