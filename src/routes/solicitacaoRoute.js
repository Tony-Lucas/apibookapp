const express = require("express");
const Router = express.Router();
const Solicitacao = require("../models/Solicitacao");
const authentication = require("../middleware/Authentication")

Router.get("/:userId/:token", authentication, async (req, res) => {
    const solicitacaos = await Solicitacao.findAll({ where: { userId: req.params.userId } });
    if (solicitacaos) {
        res.json({ success: true, livros: solicitacaos })
    } else {
        res.json({ success: false })
    }
})


module.exports = Router;
