const express = require('express');
const srv = express();
const apiRoute = require('./routes/api');

srv.use(express.json());
srv.use(express.urlencoded({extended: true}));

srv.use('/api',apiRoute);

srv.use('/public',express.static(__dirname + '/public_html'));


srv.listen(3390, function () {
    console.log("Server is up and running on port 3390!")
})