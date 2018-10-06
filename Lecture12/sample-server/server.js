const express = require('express');
const srv = express();
const todosRoute = require('./routes/todosRoute');


srv.use(express.json());
srv.use(express.urlencoded({extended: true}));

srv.use('/public', express.static(__dirname + '/public'));
srv.use('/todos', todosRoute);

srv.listen(8080, function () {
    console.log("Server has started on port number 8080!");
})