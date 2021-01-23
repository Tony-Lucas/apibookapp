const Sequelize = require('sequelize');

const sequelize = new Sequelize('heroku_24faacd44fbd71c', 'b4941ba3b94230', '454277a1', {
    host: 'us-cdbr-east-03.cleardb.com',
    dialect: 'mysql',
    raw: true,
    define: {
        timestamps: false
    }
});


module.exports = sequelize;