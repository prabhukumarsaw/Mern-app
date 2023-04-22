const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require("express");
const app = express();

dotenv.config({path: './config.env'});
require('./db/conn');
app.use(express.json());

const User = require('./model/userSchema');

app.use(require('./router/auth'));

const PORT =process.env.PORT || 5000;

//middelware

const middelware = (req, res, next) => {
    console.log('Hello my Middelware');
    next();
}

app.get('/', (req,res) => {
    res.send('I am Ready to connect the server!!');
});
app.get('/about',middelware, (req,res) => {
    res.send('I am Ready to connect the server!!');
});

if(process.env.NODE_ENV = "production") {
    app.use(express.static("client/build"))
}

app.listen(PORT, () => {
    console.log('server is running at port no %s', PORT);
});