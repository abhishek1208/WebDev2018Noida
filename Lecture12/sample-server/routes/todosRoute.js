const router = require('express').Router();

const todos = [];


router.get('/', function (req, res) {

    res.send(todos);

})

router.post('/', function (req, res) {
    todos.push({
        task: req.body.task
    })

    res.send(todos);
})

module.exports = router;