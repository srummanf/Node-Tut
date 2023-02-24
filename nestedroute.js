var express = require('express');
var app = express();
var router = express.Router();



app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

app.get('/', function (req, res) {
    res.end("Hello World!");
});





app.get('/myFirstRoute', function (req, res) {
    res.end("Welcome to nested routing!");
});

app.use('/myFirstRoute', router);

router.get('/heyTherefirstroute', function (req, res) {
    res.end("Hey there from first route!");
});

router.get('/heyTheresecondtroute', function (req, res) {
    res.end("Hey there from second route! Keep Quacking");
});