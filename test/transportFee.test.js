import assert from 'assert'
import transportFee from '../transportFee.js';

describe("Transport Fee", function(){
    it("Morning costs R20", function(){
        assert.equal(transportFee("morning"), "R20");
    }) 

    it("Afternoon costs R10", function(){
        assert.equal(transportFee("afternoon"), "R10");
    })

    it("Nghtshifts are Free", function(){
        assert.equal(transportFee("nightshift"), "free");
    })
});