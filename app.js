// Imports 
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");
const http = require("http");

// Routers Imports 
const publicRouter = require("./routes/public.js");



var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/public/images", express.static(__dirname + "/public/images/"));



app.use("/", publicRouter);

// Creating the server 
const server = http.createServer(app);
server.listen(3000, console.log("server running on 3000"));

module.exports = app;
