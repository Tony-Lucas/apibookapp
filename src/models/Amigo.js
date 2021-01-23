const Sequelize = require('sequelize');
const sequelize = require("../config/database");

const Amigo = sequelize.define("amigos",{
    
})

Amigo.sync({force:true})

module.exports = Amigo