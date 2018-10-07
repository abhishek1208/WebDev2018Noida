$(function () {
    const inputName = $('#name');
    const inputCity = $('#city');
    const inputAge = $('#age');
    const submit = $('#btn');
    const container = $('#container')

    function refreshPage(persons) {

        container.empty();
        for (person of persons) {
            container.append(
                `<div><p>Name : ${person.name}</p><p>City : ${person.city}</p><p>Age : ${person.age}</p></div><hr>`
            )
        }
    }

    $.get('/api/persons', function (persons) {
        refreshPage(persons);
    })

})