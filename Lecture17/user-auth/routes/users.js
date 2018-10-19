const route = require('express').Router();
const db = require('../db');
const passport = require('../passport')

route.get('/login', (req, res) => {
    res.render('login');
})

route.post('/login', passport.authenticate('local',{
    successRedirect: '/data',
    failureRedirect: '/login'
}))

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