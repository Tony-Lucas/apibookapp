const Sequelize = require('sequelize');
const sequelize = require("../config/database");

const Livro = sequelize.define("livros", {
    nome: { type: Sequelize.STRING, allowNull: false },
    categoria: { type: Sequelize.STRING, allowNull: false },
    autor: { type: Sequelize.STRING, allowNull: false }
})

Livro.associate = models => {
    Livro.belongsTo(models.User,{
        foreignKey:{
            allowNull:false
        }
    })
}

Livro.sync({force: true})

module.exports = Livro