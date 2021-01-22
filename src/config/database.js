const Sequelize = require('sequelize');

const sequelize = new Sequelize('dbbookapp', 'root', '55425610a', {
    host: 'localhost',
    dialect: 'mysql',
    raw: true,
    define: {
        timestamps: false
    }
});

sequelize.authenticate()


module.exports = sequelize;