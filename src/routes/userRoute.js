const express = require("express");
const Router = express.Router();
const User = require("../models/User")
const bcrypt = require("bcrypt-nodejs");
const authentication = require("../middleware/Authentication")
const { Op } = require("sequelize");
const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

Router.get("/:token", authentication, async (req, res) => {
    const users = await User.findAll()
    if (users) {
        res.json({ success: true, users: users })
    }
})

Router.get("/:id/:token", authentication, async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (user) {
        res.json({ success: true, user: user })
    } else {
        res.json({ success: false })
        console.log(user)
    }
})

Router.get("/busca/:nome/:token", authentication, async (req, res) => {
    const users = await User.findAll({ where: { nome: { [Op.like]: req.params.nome } } });
    if (users) {
        res.json({ success: true, users: users })
    } else {
        res.json({ success: false })
    }
})

Router.post("/", async (req, res) => {
    const userCheck = await User.findOne({ where: { email: req.body.email } })
    if (!userCheck) {
        const hash = bcrypt.hashSync(req.body.password)
        const user = await User.create({ email: req.body.email, password: hash, nome: req.body.nome });
        if (user) {
            res.json({ success: true, user: user })
        } else {
            res.json({ success: false, message: user })
        }
    } else {
        res.json({ success: false, message: "Usuario já cadastrado" })
    }
})

Router.post("/addphoto", upload.single("foto"), authentication, async (req, res) => {
    const user = await User.update({ nomeFoto: req.file.filename }, { where: { id: req.body.id } })
    if (user) {
        res.json({ success: true, user: user })
    } else {
        res.json({ success: false })
    }
})

module.exports = Router;