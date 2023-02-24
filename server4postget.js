var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Make Use of this middleware while using url
app.use(bodyParser());

var port = 3000;

app.listen(port, function () {
    console.log('Server is running on port 3000');
});

// GET

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/files/inputform.html');
});

// app.get('/', function (req, res) {
//     res.end(JSON.stringify(req.query));
// });

// Output :
// p://localhost:3000/?firstName=Rumman
// {"firstName":"Rumman"} will be shown on page



//POST
app.post('/', function (req, res) {
    // res.sendFile(__dirname + 'files/inputform.html');
    res.end(JSON.stringify(req.body));

    // if(req.body.username == 'admin')
    // {
    //     ................................................................
    // }

});

