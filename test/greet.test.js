
import assert from 'assert'
import greet from '../greet.js';

describe('Greetings', function () {
    it('greeting - Done', function () {
    assert.equal("Hello, Tswelopele", greet("Tswelopele"));
    });
});
