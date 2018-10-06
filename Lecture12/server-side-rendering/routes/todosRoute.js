const router = require('express').Router();

const todos = [];


router.get('/', function (req, res) {

    res.render('todos', todos);

})

router.post('/', function (req, res) {
    todos.push({
        task: req.body.task
    })

    res.render('todos', todos);
})

module.exports = router;