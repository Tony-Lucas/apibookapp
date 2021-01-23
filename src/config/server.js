
const express = require("express");
const app = express();
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

app.listen(3030)

module.exports = app