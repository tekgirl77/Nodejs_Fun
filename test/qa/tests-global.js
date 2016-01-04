/**
 * Created by Salle on 12/26/15.
 */

"use strict";
var assert = require('chai').assert;

describe('Global Tests', function () {
    it('page has a valid title', function () {
        assert(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== 'TODO');
    });
});

