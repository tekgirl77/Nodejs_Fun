/*jslint node: true */
"use strict";
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var routes = require('./routes/index');
var users = require('./routes/users');
var debug = require('debug')('NodeJS_Fun:server');

var app = express();

//Create Constructor here.
// 'use strict';

// set port via env variable or static
app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(require('less-middleware')(path.join(__dirname, '/public')));
debug("LESS path is: " + path.join(__dirname, '/less'));
debug("CSS path is: " + path.join(__dirname, 'public'));
app.use(lessMiddleware(path.join(__dirname, '/less'), {
    dest: path.join(__dirname, 'public'),
    force: true
    //debug: true
}));
//app.use(express.static(__dirname + "/public"));

app.use(express.static(path.join(__dirname, '/public')));

app.all('*', function(req,res) {
    res.render(
        'index', {
            title: 'Sandbox'//' Salle\'s \{Slice\}!'
        }
    );
});
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
