const router = require('express').Router();

const students = [
    {name: "Wasim", college: "DTU", year: 3},
    {name: "Medhavi", college: "IIT", year: 4},
    {name: "Shivamm", college: "NSIT", year: 3}

];


router.get('/', (req, res) => {
    res.send(students);

})

router.post('/', (req, res) => {
    students.push({
        name: req.body.name,
        college: req.body.college,
        year: parseInt(req.body.year)
    })
    res.send(students)
})

router.get('/add', (req, res, next) => {

    students.push({
        name: req.query.name,
        college: req.query.college,
        year: parseInt(req.query.year)
    })

    res.send(students);

})


router.get('/:id', (req, res) => {

    res.send(students[req.params.id]);
});
module.exports = router;