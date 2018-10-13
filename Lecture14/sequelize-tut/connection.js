const Sequelize = require('sequelize');
const db = new Sequelize('studentdb', 'newuser', 'newpass', {
    host: 'localhost',
    dialect: 'mysql'
})

const Student = db.define('students', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER(2),
        allowNull: false
    }
})

// Student.create({
//     name: "Satyndera",
//     age: 14
//
// }).then((student) => {
//     console.log(student.dataValues.name);
// }).catch(err => console.log(err))


Student.findAll({
    where: {
        name: "Abhishek"
    }
}).then((data) => {
    console.log(data[0].dataValues.id)
}).catch(err => console.log(err))


db.sync({alter: true})
    .then(() => {
        console.log("Database connection established!")
    })
    .catch((err) => {
        console.log(err)
    })