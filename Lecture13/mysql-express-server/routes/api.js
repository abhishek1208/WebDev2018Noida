const route = require('express').Router();
const db = require('../db');


// const persons =
//     [
//         {name: "Anshul", city: "Punjab", age: 25},
//         {name: "Harshit", city: "Delhi", age: 17}
//     ];


route.get('/persons', (req, res) => {
    db.getAllPersons()
        .then(function (persons) {
            res.send(persons)
        })
        .catch(function (err) {
            res.send(err)
        })
})


route.post('/persons', (req, res) => {
    persons.push({
        name: req.body.name,
        city: req.body.city,
        age: parseInt(req.body.age)
    })
    res.send(persons);
})

module.exports = route