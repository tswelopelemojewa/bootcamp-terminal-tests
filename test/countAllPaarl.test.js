import assert from 'assert'
import countAllPaarl from '../countAllPaarl.js';

describe("All from Paarl", function(){
    it("2 cars from Paarl", function(){
        assert.equal(countAllPaarl("CJ 345 123, CK 345, CJ 123"), 2);
    })
});
