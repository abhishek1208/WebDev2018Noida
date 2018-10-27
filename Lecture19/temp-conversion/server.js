const express = require('express');
const srv = express();
const convert = require('./conversion');

srv.use(express.json())
srv.use(express.urlencoded({extended: true}));

srv.post('/ctof', function (req, res) {

    let retVal = convert.ctof(parseInt(req.body.temp));
    if (!retVal) {
        res.status(400).send("Wrong temperature format!")
    }
    else {
        res.status(200).send({temp: retVal});
    }

})

module.exports = srv;