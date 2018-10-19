const express = require('express');
const srv = express();
const session = require('express-session');
const passport = require('./passport');

srv.set('view engine', 'hbs');
srv.use(session({secret: "cats"}));
srv.use(express.json());
srv.use(express.urlencoded({extended: true}))
srv.use(passport.initialize());
srv.use(passport.session());

srv.use('/users', require('./routes/users'));
srv.use('/data', require('./routes/data'));


srv.listen(1209, () => {
    console.log("Server is up and running at 1209!")
})