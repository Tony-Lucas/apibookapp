const sequelize = require("../config/database")
const User = require("./User");
const Postagem = require("./Postagem")
const Livro = require("./Livro")
const Amigo = require("./Amigo")
const Comentario = require("./Comentario");
const CurtidaComentario = require("./CurtidaComentario");
const CurtidaPostagem = require("./CurtidaPostagem");

User.hasMany(Postagem);
Postagem.belongsTo(User);
User.hasMany(Livro);
Livro.belongsTo(User);
User.hasMany(Amigo);
Amigo.belongsTo(User)
Postagem.hasMany(Comentario);
Comentario.belongsTo(Postagem)
Postagem.hasMany(CurtidaPostagem);
CurtidaPostagem.belongsTo(Postagem);
Comentario.hasMany(CurtidaComentario);
CurtidaComentario.belongsTo(Comentario);

sequelize.sync({force:true})