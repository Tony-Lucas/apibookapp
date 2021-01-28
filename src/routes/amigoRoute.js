const express = require("express");
const Router = express.Router();
const Amigo = require("../models/Amigo");
const authentication = require("../middleware/Authentication")

Router.get("/:userId/:token", authentication, async (req, res) => {
    const amigos = await Amigo.findAll({ where: { userId: req.params.userId } });
    if (amigos) {
        res.json({ success: true, amigos: amigos })
    } else {
        res.json({ success: false })
    }
})


module.exports = Router;
