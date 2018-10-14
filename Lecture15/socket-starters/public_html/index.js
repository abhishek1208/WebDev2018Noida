const socket = io();

$(function () {
    let msgBox = $('#msgBox');
    let list = $('#messageList');
    let btn = $('#send');

    socket.on('recv_msg', function (data) {
        list.append("<li>" + data.message + "</li>")
    })

    btn.click(function () {
        let msg = msgBox.val();
        socket.emit('send_msg', {message: msg})
    })
})

