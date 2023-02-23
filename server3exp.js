var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var port = 3000;

// Creating Server
app.listen(port, function () {
    console.log('Server is running on port 3000');
});

// Including Static Files
app.use('/cssFiles', express.static(__dirname + '/styles'))
// http://localhost:3000/cssFiles/styles.css ==> will show my css code

// app.use('/files', express.static(__dirname + '/files'))


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

// Regex Routers (for dynamic routes) starts and ends with anything
app.get(/^(.+)$/, function (req, res) {
    try {
        if (fs.statSync(path.join(__dirname, './files/', req.params[0] + '.html')).isFile()) {
            console.log('File Exists');
            res.sendFile(req.params[0] + '.html', { root: path.join(__dirname, './files') });
        }
    }
    catch (err) {
        console.log('File Does Not Exists');
        res.sendFile(__dirname + '/files/404.html');
    }
});



