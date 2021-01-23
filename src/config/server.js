
const express = require("express");
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
require("../models/associations");
const cors = require("cors");

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const userRoute = require("../routes/userRoute")
const loginRoute = require("../routes/loginRoute")
const livroRoute = require("../routes/livroRoute");

app.use("/user",userRoute);
app.use("/login",loginRoute);
app.use("/livro",livroRoute);

app.listen(process.env.PORT || 3000)

module.exports = app