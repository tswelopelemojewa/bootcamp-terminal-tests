
import assert from 'assert'
import isFromBellville from "../isFromBellville.js"; 

describe("Is from Bellville", function(){
    it("from Bellville", function(){
        assert.equal(isFromBellville("CY 619"), true);
    });

    it("Not from Bellville", function(){
        assert.equal(isFromBellville("CJ 3310"), false)
    });
});
