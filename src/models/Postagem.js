const Sequelize = require('sequelize');
const sequelize = require("../config/database");


const Postagem = sequelize.define("postagens", {
    descricao: { type: Sequelize.STRING, allowNull: false },
    data: { type: Sequelize.DATEONLY, allowNull: false },
})

Postagem.sync({ force: true });

module.exports = Postagem;