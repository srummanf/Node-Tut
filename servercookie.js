var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
    res.cookie('myfirstcookie','looks  good',);
    res.end("wow!")
});
// if you go to browser console and type document.cookie you will see the cookie

app.get('/removeCookie', function (req, res) {
    res.clearCookie();
    res.end("Cookies cleared!")
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
    console.log('aye yo');
});
