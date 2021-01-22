const Sequelize = require('sequelize');
const sequelize = require("../config/database");

const User = sequelize.define("users",{
    email:{type:Sequelize.STRING,allowNull:false},
    password:{type:Sequelize.STRING,allowNull:false},
    nome:{type:Sequelize.STRING,allowNull:false},
    sobrenome:{type:Sequelize.STRING,allowNull:false}
})

User.sync({force:true})