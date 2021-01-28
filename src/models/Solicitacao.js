const Sequelize = require('sequelize');
const sequelize = require("../config/database");


const Solicitacao = sequelize.define("solicitacoes", {
    tipo:{type:Sequelize.STRING,allowNull: false},
    aceito:{type:Sequelize.BOOLEAN,allowNull: false},
    visualizado:{type:Sequelize.BOOLEAN,defaultValue:false}
})

module.exports = Solicitacao;