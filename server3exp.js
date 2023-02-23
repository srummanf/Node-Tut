var express = require('express');
var app = express();
var port = 3000;

// Creating Server
app.listen(port, function () {
    console.log('Server is running on port 3000');
});

// Including Static Files
app.use('/cssFiles', express.static(__dirname + '/styles'))
// http://localhost:3000/cssFiles/styles.css ==> will show my css code


// Creating Homepage Route
app.get('/', function (req, res) {
    res.send('Hello World rumi');
});

// Creating Routes
app.get('/rumi', function (req, res) {
    res.send('Hi rumi');
});

