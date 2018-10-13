const route = require('express').Router();
const db = require('../db');

route.get('/', (req, res) => {
    db.User.findAll()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send("Could not get all the users!")
        })


})

route.post('/', (req, res) => {
    db.User.create({
        name: req.body.name
    })
        .then((user) => {
            res.send(user)
        })
        .catch(err => {
            res.send("Could not create a new user");
        })
})

module.exports = route;