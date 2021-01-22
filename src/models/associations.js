const sequelize = require("../config/database")
const User = require("./User");
const Postagem = require("./Postagem")
const Livro = require("./Livro")

User.hasMany(Postagem);
Postagem.belongsTo(User);
User.hasMany(Livro);
Livro.belongsTo(User)
sequelize.sync({force:true})