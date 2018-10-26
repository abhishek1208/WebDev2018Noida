const route = require('express').Router();

route.get('/', (req, res) => {
    if(!req.user){
       return res.redirect('/users/login')
    }
    res.send(req.session);
})

module.exports = route;