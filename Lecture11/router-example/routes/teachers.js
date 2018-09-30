const router = require('express').Router();

const teachers = [
    {name: "Abhishek", course: "WebD"},
    {name: "Saksham", course: "Android"},
    {name: "Anuj", course: "Cplusplus"}
]


router.get('/', (req, res) => {
    res.send(teachers);
})


router.get('/:id',(req,res)=>{
    res.send(teachers[req.params.id])
})

module.exports = router