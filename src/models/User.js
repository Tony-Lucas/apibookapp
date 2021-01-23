const Sequelize = require('sequelize');
const sequelize = require("../config/database");
const Postagem = require("./Postagem");

const User = sequelize.define("users", {
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    nome: { type: Sequelize.STRING, allowNull: false }
})



module.exports = User;