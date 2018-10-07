const router = require('express').Router();

const teachers = [
    {name: "Abhishek", course: "WebD"},
    {name: "Saksham", course: "Android"},
    {name: "Anuj", course: "Cplusplus"}
]

router.get('/:id',(req,res)=>{

    res.send(teachers[req.params.id])
})

router.get('/', (req, res) => {
    res.send(teachers);
})




module.exports = router