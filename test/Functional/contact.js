"use strict";

process.env.NODE_ENV = 'development';

var server = require('../../app');
// use zombie.js as headless browser
var Browser = require('zombie');
var http = require('http');
var assert = require('chai').assert;


describe('contact page', function() {
    before(function() {
        this.server = http.createServer(server).listen(3333);
        // initialize the browser using the same port as the test application
        this.browser = new Browser({ site: 'http://localhost:3333' });
    });

    // load the contact page
    before(function(done) {
        this.browser.visit('/contact', done);
    });

    it('should show contact a form', function () {
        assert.ok(this.browser.success);
        assert.equal(this.browser.text('h1'), 'Contact Me');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
    });

    // chaining promises
    it('should refuse empty submissions', function (done) {
        var browser = this.browser;
        browser.pressButton('Send').then(function () {
            assert.ok(browser.success);
            assert.equal(browser.text('h1'), 'Contact');
            assert.equal(browser.text('div.alert'), 'Please fill in all the fields');
        }).then(done, done);
    });
});