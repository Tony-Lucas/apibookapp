const express = require("express");
const Router = express.Router();
const Livro = require("../models/Livro");
const authentication = require("../middleware/Authentication")

Router.get("/:id", authentication, async (req, res) => {
    const livro = await Livro.findOne({ where: { id: req.params.userId } });
    if (user) {
        res.json({ success: true, user: user })
    } else {
        res.json({ success: false })
        console.log(user)
    }
})

Router.post("/", authentication, async (req, res) => {
    const livro = await Livro.create({ nome: req.body.nome, categoria: req.body.categoria, autor: req.body.autor, userId: req.body.userId });
    if (livro) {
        res.json({ success: true })
    } else {
        res.json({ success: false })
    }
})

Router.post("/altera", authentication, async (req, res) => {
    const livro = await Livro.update({ nome: req.body.nome, categoria: req.body.categoria, autor: req.body.autor, userId: req.body.userId },{where:{id:req.body.id}});
    if (livro) {
        res.json({ success: true })
    } else {
        res.json({ success: false })
    }
})

module.exports = Router;