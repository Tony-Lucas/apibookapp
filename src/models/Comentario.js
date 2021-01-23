const Sequelize = require('sequelize');
const sequelize = require("../config/database");


const Comentario = sequelize.define("comentarios", {
    descricao: { type: Sequelize.STRING, allowNull: false },
})

module.exports = Comentario;