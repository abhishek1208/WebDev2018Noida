const Sequelize = require('sequelize');

const db = new Sequelize('uauth', 'uuser', 'upass', {
    host: 'localhost',
    dialect: 'mysql'
})

const User = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

db.sync().then(() => {
    console.log("Database is up and running")
}).catch(err => console.log(err))


module.exports = {
    User
}