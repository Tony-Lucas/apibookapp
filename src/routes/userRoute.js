const express = require("express");
const Router = express.Router();


Router.get("/",(req,res) => {
    return res.send({message:"Alururururuur"})
})

module.exports = Router;