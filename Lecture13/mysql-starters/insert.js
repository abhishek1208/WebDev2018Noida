const mysql = require('mysql2');


const insert = {
    name: 'Shivam',
    city: 'pune',
    age: 23
};
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'webdevnoida',
    user: 'myuser',
    password: 'mypass'
})


connection.query(
    `INSERT INTO persons (name,city,age) VALUES
     ('${insert.name}','${insert.city}',${insert.age});`,
    function (err, results) {
        if (err) {
            return console.log(err)
        }
        console.log(results);
        console.log(fields)
        connection.close();

    }
