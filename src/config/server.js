
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
require("../models/associations");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const userRoute = require("../routes/userRoute")

app.use("/user",userRoute);

app.listen(3000)

module.exports = app