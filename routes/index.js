/*jslint node: true */
"use strict";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'DevOps Engineer'
    });
});
router.get('/about', function (req, res, next) {
    res.render('about', {title: 'A Little About Me'
    });
});
router.get('/contact', function (req, res, next) {
    res.render('contact', {title: 'Contact Me'
    });
});
router.get('/headers', function (req, res, next) {
    res.set('Content-Type', 'text/plain');
    var s = '',
        name;
    if (req.headers) {
        for (name in req.headers) {
            s += name + ": " + req.headers[name] + "\n";
        }
        res.send(s);
    }
});


module.exports = router;