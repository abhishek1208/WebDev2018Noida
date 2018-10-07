const route = require('express').Router();
const db = require('../db');


route.get('/persons', (req, res) => {
    db.getAllPersons()
        .then(function (persons) {
            res.render('persons',{persons});
        })
        .catch(function (err) {
            res.send(err)
        })
})


route.post('/persons', (req, res) => {
    db.addNewPerson(req.body.name, req.body.city, parseInt(req.body.age))
        .then(function () {
            res.redirect('/pages/persons')
        })
        .catch(function (err) {
            res.send(err);
        })
})

module.exports = route