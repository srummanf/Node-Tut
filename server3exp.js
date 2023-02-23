var express = require('express');
var app = express();
var apth = require('path');
var port = 3000;

// Creating Server
app.listen(port, function () {
    console.log('Server is running on port 3000');
});

// Including Static Files
app.use('/cssFiles', express.static(__dirname + '/styles'))
// http://localhost:3000/cssFiles/styles.css ==> will show my css code


// Creating Homepage Route
// app.get('/', function (req, res) {
//     res.send('Hello World rumi');
// });

// Creating Homepage Route using html file
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    // res.sendFile(__dirname + 'index.html',{root:path.join(__dirname, './foldername')}); if your html file lies in a folder
});

// Creating Routes
app.get('/rumi', function (req, res) {
    res.send('Hi rumi');
});



