var express = require('express');
var app = express();
var path = require('path');

var port = 3000;

app.listen(port, function () {
    console.log('Server is running on port 3000');
});

// GET

// app.get('/', function (req, res) {
//     res.end(JSON.stringify(req.query));
// });

// Output :
// http://localhost:3000/?firstName=Rumman
// {"firstName":"Rumman"} will be shown on page