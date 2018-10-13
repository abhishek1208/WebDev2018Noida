const express = require('express');
const srv = express();
const userRoute = require('./routes/users');
const productRoute = require('./routes/products');


srv.use(express.json());
srv.use(express.urlencoded({extended: true}));

srv.use('/api/users', userRoute);
srv.use('/api/products', productRoute);



srv.listen(1208, () => {
    console.log("Server is up and running at port 1208!");
})