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

const Batch = db.define('batches', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    capacity: {
        type: Sequelize.INTEGER(2),
        allowNull: false
    }
})

const Subject = db.define('subjects', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    credits: {
        type: Sequelize.INTEGER(1),
        allowNull: false
    }
})
const StudentSubject = db.define('studentSubjects', {})



Student.belongsTo(Batch);
Batch.hasMany(Student);

Student.belongsToMany(Subject,{through: 'studentSubjects'});
Subject.belongsToMany(Student,{through: 'studentSubjects'})


db.sync({alter: true})
    .then(() => {
        console.log("Database connection established!")
    })
    .catch((err) => {
        console.log(err)
    })