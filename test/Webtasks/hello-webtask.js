"use strict";

var request = require('request');


module.exports = function (done) {

    var start = Date.now();
    request.get('https://auth0.com', function (error, res, body) {
        if (error) {
            done(error);
        } else {
            done(null, {
                status: res.statusCode,
                length: body.length,
                latency: Date.now() - start
            });
        }
    });
};

