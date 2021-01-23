const express = require("express");
const Router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const User = require("../models/User")

Router.post("/", async(req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (user) {
            const isPassword = bcrypt.compareSync(req.body.password, user.password);
            if (isPassword) {
                const token = jwt.sign({ id: user.id, email: user.email }, "segredodoapplivrotonhaoaluruur", { expiresIn: '24h' });
                res.json({ id: user.id, token: token, success: true });
            } else {
                res.json({ message: 'Senha invalida', success: false })
            }
        } else {
            res.json({ message: 'Admin nao esta cadastrado', success: false })
        }
    } catch (error) {
        res.json({ message: error.message });
    }
})

module.exports = Router;