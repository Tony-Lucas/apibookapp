const express = require("express");
const Router = express.Router();
const Amigo = require("../models/Amigo");
const User = require("../models/User")
const authentication = require("../middleware/Authentication")
const { Op } = require("sequelize");

Router.get("/:userId/:token", authentication, async (req, res) => {
    const amigos = await Amigo.findAll({ where: { userId: req.params.userId } });
    if (amigos) {
        res.json({ success: true, amigos: amigos })
    } else {
        res.json({ success: false })
    }
})

Router.get("/:nome/:token", authentication, async (req, res) => {
    const leitores = await User.findAll({where:{nome:{[Op.like]: [req.params.nome]}}});
    if(leitores){
        res.json({ success: true,leitores: leitores})
    }else{
        res.json({ success: false})
    }
})


module.exports = Router;
