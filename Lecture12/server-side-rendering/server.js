const express = require('express');
const srv = express();
const todosRoute = require('./routes/todosRoute')

srv.use(express.json());
srv.use(express.urlencoded({extended: true}));
srv.set('view engine', 'hbs');


srv.use('/todos', todosRoute)


srv.listen(1208, function () {
    console.log("Server is up and running at 1208!")
})