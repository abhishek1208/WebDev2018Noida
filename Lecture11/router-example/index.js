const express = require('express');
const srv = express();
const teachersRoute = require('./routes/teachers');
const studentsRoute = require('./routes/students');

srv.use(express.json());
srv.use(express.urlencoded({extended: true}));


srv.use('/teachers', teachersRoute);
srv.use('/students', studentsRoute);

srv.listen(8080, () => {
    console.log("Server is running at 8080!")
})