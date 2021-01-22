const express = require("express");
const Router = express.Router();
const User = require("../models/User")

Router.get("/",(req,res) => {
    return res.send({message:"Alururururuur"})
})

module.exports = Router;