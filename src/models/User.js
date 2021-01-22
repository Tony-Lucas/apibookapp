const Sequelize = require('sequelize');
const sequelize = require("../config/database");
const Postagem = require("./Postagem")
const Livro = require("./Livro")

const User = sequelize.define("users", {
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    nome: { type: Sequelize.STRING, allowNull: false },
    sobrenome: { type: Sequelize.STRING, allowNull: false }
})

User.associate = models => {
    User.hasMany(models.Postagem,{
        onDelete:"cascade"
    })

    User.hasMany(models.Livro,{
        onDelete:"cascade"
    })
}

User.sync({ force: true })

module.exports = User;