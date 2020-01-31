"use strict";
// import * as temp from './temperatura/temp';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(require('./temperatura/temp'));
app.listen(3000, function () {
    console.log("Escuchando el puerto: 3000");
});
