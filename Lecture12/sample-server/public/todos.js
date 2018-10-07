$(function () {
    const todoBox = $('#box');
    const btn = $('#btn');
    const list = $('#list')
    btn.click(function () {
        const task = todoBox.val();
        $.post('/todos',
            {
                task: task
            },
            function (data) {
                list.empty();
                for (todo of data) {
                    list.append('<li>' + todo.task + '</li>')
                }
            }
        )
    })


})

