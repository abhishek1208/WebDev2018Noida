const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    database: 'webdevnoida',
    user: 'myuser',
    password: 'mypass'
})


connection.query(
    `SELECT * FROM persons`,
    function (err, results, fields) {
        if (err) {
            return console.log(err)
        }
        console.log(results);
        console.log(fields)
        connection.close();

    }
)