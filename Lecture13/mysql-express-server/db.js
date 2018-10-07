const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'webdevnoida',
    user: 'myuser',
    password: 'mypass'
})


function getAllPersons() {
    return new Promise(function (resolve, reject) {
        connection.query(`SELECT * FROM persons`,
            function (err, results) {
                if (err) {
                    reject(err);
                }

                resolve(results)
            })
    })
}


module.exports = {
    getAllPersons
}