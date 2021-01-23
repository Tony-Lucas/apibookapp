const express = require("express");
const Router = express.Router();
const Postagem = require("../models/Postagem");
const authentication = require("../middleware/Authentication")

Router.get("/:userId", async (req, res) => {
    const postagens = await Postagem.findAll({where:{userId:req.params.userId}})
    if(postagens){
        res.json({success:true,postagens:postagens})
    }
})

module.exports = Router;