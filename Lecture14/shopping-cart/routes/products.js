const route = require('express').Router();
const db = require('../db');

route.get('/', (req, res) => {
    db.Product.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            res.send("Could not get all products!")
        })
})

route.post('/', (req, res) => {
    db.Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    })
        .then((data) => {
            res.send(data)
        })
        .catch(err => {
            res.send("Could not create product!")
        })
})
module.exports = route;