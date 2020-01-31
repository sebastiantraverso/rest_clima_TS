// import * as temp from './temperatura/temp';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use( bodyParser.json());

app.use( require('./temperatura/temp' ));


app.listen( 3000, () => {
    console.log("Escuchando el puerto: 3000");
});

