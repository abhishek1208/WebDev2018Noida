const express = require('express');
const srv = express();


srv.set('view engine','hbs');

srv.use('/users',require('./routes/users'));
srv.use('/data',require('./routes/data'));



srv.listen(1209,()=>{
    console.log("Server is up and running at 1209!")
})