"use strict";

var request = require('request');
var cheerio = require('cheerio');
var process = require('process');


module.exports = function (done) {
    var login = {
        url: 'https://lastpass.com/?&ac=1&lpnorefresh=1&fromwebsite=1&newvault=1&nk=1',
        method: 'POST',
        jar: true,
        form: {
            email: process.env.LASTPASS_ID,
            password: process.env.LASTPASS_PW
        }

    };
    request.post(login, function (error, res, body) {
        if (!error) {
            request.get('https://lastpass.com/?&ac=1&lpnorefresh=1&fromwebsite=1&newvault=1&nk=1', function (error, res, body) {
                if (error) {
                    done("Error retrieving data \n", error);
                } else {
                    // More Options > Export > POST 'https://lastpass.com/export.php' u: process.env.LASTPASS_ID pw: process.env.LASTPASS_PW
                    // if !error then GET 'https://lastpass.com/export.php'
                    done(null, {
                        body: body,
                        status: "Success"
                    });
                }
            });
        } else {
            done(null, {
                status: "Error logging in \n",
                error: error
            });
        }
    });
};

/*

var click = function (text, callback) {
    var code = "if (document.querySelector('#{text}') != null) {" +
                    "document.querySelector('#{text}').click();" +
                "} else {" +
                    "elements = document.documentElement.querySelectorAll('a,button');" +
                    "for (var i = 0; i < elements.length; i++) {" +
                        "if (elements[i].innerText == '#{text}') {" +
                            "elements[i].click();" +
                        "}" +
                    "}" +
                "}";
};

*/