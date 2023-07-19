import assert from 'assert'
import countRegNumber from '../countRegNumber.js';

describe("Registration Count", function(){
    it("counted 4", function(){
        var count = countRegNumber("CJ 28928, CA 787889,CY 93932,CJ 0921921")
        assert.equal(count, 4)
    });
});
