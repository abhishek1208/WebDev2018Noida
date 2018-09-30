const router = require('express').Router();

const students = [
    {name:"Wasim",college:"DTU", year:3},
    {name:"Medhavi",college:"IIT",year :4},
    {name:"Shivamm",college:"NSIT",year:3}

];


router.get('/',(req,res)=>{
    res.send(students);

})

router.get('/add',(req,res)=>{

    students.push({
        name:req.query.name,
        course:req.query.college,
        year:parseInt(req.query.year)
    })

    res.send(students);

})


router.get('/:id',(req,res)=>{
    res.send(students[req.params.id]);
});
module.exports = router;