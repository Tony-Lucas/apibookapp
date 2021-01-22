const Sequelize = require('sequelize');
const sequelize = require("../config/database");

const Estante = sequelize.define("estante",{
    Nome:{type:Sequelize.STRING,allowNull:false}
})

Estante.sync({force:true})