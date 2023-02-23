var express = require('express');
var app = express();
var port = 3000;

// Creating Server
app.listen(port, function () {
    console.log('Server is running on port 3000');
});

// Creating Homepage Route
app.get('/', function (req, res) {
    res.send('Hello World rumi');
});

// Creating Routes
app.get('/rumi', function (req, res) {
    res.send('Hi rumi');
});