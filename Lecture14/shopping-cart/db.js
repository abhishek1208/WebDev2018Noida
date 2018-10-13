const Sequelize = require('sequelize');
const db = new Sequelize('shopdb', 'shopuser', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql'
})

const User = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


const Product = db.define('products', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: 0.0
    }
})


db.sync(() => {
    console.log("DATABASE IS CONNECTED!")
})


module.exports ={
    User,
    Product
}