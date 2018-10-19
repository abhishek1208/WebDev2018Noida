const express = require('express');
const srv = express();
const socketio = require('socket.io');

const http = require('http');

const server = http.createServer(srv);

const io = socketio(server);


srv.use('/public', express.static(__dirname + '/public_html'))

io.on('connection', function (socket) {
    console.log(socket.id)

    socket.on('send_msg', function (data) {
        console.log(data);

        socket.broadcast.emit('recv_msg', data)
    })
})

server.listen(8080, () => {
    console.log("Server is up and running at 8080!")
})