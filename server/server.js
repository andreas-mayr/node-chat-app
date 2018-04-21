require('./config/config')

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;

var app = express();

app.use(express.static(publicPath));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};