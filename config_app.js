var express = require("express");
var consign = require("consign");

var app = express();

consign({verbose: false})
    .include("routes")
    .into(app);
    

module.exports = app;