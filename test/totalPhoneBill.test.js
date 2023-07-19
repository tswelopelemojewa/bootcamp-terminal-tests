import assert from 'assert'
import totalPhoneBill from '../totalPhoneBill.js';

describe("Total Phone Bill", function(){
    it("2 calls and 3 SMSs ", function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), "R7.45");
    })
});