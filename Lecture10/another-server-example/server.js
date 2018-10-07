const express =require('express');
const srv= express();


const m1=function (req,res,next) {
    console.log("Middleware 1 called!")
    next();
}

const m2=function (req,res,next) {
    console.log("Middleware 2 called!")
    next();
}

const m3=function (req,res,next) {
    console.log("Middleware 3 called!")
    next();
}

srv.use(m1);

srv.use('/abc',m2)

srv.get('/abc',(req,res,next)=>{
    res.send("Hello world");

})

srv.use(m3);
srv.use((req,res,next)=>{
    res.send(`<html><h1>404 ERROR NOT FOUND</h1></html>`)
})
srv.listen(1208,()=>{
    console.log("Server is up and running at 1208!")
})