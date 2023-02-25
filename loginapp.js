var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
// var sessions = require('express-sessions');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
    secret: 'gdcagsdkuvagkvjgajkgvgfvk2432(*&^($#sdvbj76576adO',
    resave: false,
    saveUninitialized: true,
}));

var port = 3000;

app.listen(port, function () {
    console.log('Server is running on port 3000');
});

app.get('/login', function (req, res) {
    session = req.session;
    if (session.uniqueuniqueID) {
        res.redirect('/redirects');
    }
    res.sendFile(__dirname + '/files/inputform.html');
});


app.post('/login', function (req, res) {
    // res.end(JSON.stringify(req.body));
    session = req.session;
    if (session.uniqueuniqueID) {
        res.redirect('/redirects');
    }
    if (req.body.username == 'admin' && req.body.password == 'admin') {
        session.uniqueuniqueuniqueID = req.body.username
        res.end("Login Success");
        res.redirect('/admin');
    }
    else {
        res.redirect('/redirects');
    }
});


app.get('/redirects', function (req, res) {
    session = req.session;
    if (session.uniqueuniqueuniqueID) {
        console.log(session.uniqueuniqueuniqueID);
        res.redirect('/admin');
    } else {
        res.send("Chal Nikal! <a href='/logout>KILL SESSION</a>")
    }
});

app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/login');
        }
    });
});


