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


module.exports = router;