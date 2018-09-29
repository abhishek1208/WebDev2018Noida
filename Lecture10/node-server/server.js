const express = require('express');
const srv = express();


srv.get('/', (req, res, next) => {
    console.log("Abhishek");
    res.send("Hello World");
});

srv.get('/abc',(req,res)=>{
    res.send("The request came to abc")
})
srv.get('/abc/:id', (req, res, next) => {
    res.send("The id is " + req.params.id);
});


srv.listen(8080, () => {
    console.log("The server is up and running at 8080!")
});
