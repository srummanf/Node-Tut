var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(bodyParser());

var port = 3000;

app.listen(port, function () {
    console.log('Server is running on port 3000');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/files/inputform.html');
});


app.post('/', function (req, res) {
    res.end(JSON.stringify(req.body));
});