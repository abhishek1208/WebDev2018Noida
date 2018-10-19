const route = require('express').Router();
const db = require('../db');


route.get('/login', (req, res) => {
    res.render('login');
})

route.post('/login', (req, res) => {

    db.User.findOne({
        where: {
            username: req.body.username
        }
    }).then((user) => {
        if (!user) {
            return res.send("No user exists with such username")
        }
        if (user.password !== req.body.password) {
            return res.send("Wrong password!")
        }

        res.redirect('/data');
    })
})

route.get('/signup', (req, res) => {
    res.render('signup')
})

route.post('/signup', (req, res) => {
    db.User.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    }).then((user) => {
        res.redirect('/users/login')
    }).catch((err) => {
        res.send(err)
    })
})


module.exports = route;