const route = require('express').Router();

route.get('/', (req, res) => {
    res.send("USER SENSITIVE DATA");
})

module.exports = route;