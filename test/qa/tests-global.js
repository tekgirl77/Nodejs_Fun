/**
 * Created by Salle on 12/26/15.
 */

"use strict";
var mocha = require('mocha');
var assert = mocha.assert;

describe('Global Tests', function () {
    it('page has a valid title', function () {
        assert(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== 'TODO');
    });
});

