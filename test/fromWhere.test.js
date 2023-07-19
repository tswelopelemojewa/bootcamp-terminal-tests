import assert from 'assert'
import fromWhere from '../fromWhere.js';


describe("from Where", function(){
    it("From Bellville", function(){
        assert.equal(fromWhere("CY 4568"), "Bellville");
    }),
    it("From Paarl", function(){
        assert.equal(fromWhere("CJ 098 kk"), "Paarl");
    }),
    it("From Cape Town", function(){
        assert.equal(fromWhere("CA 22812"), "Cape Town");
    }),
    it("From some other place!", function(){
        assert.equal(fromWhere("DFC 619 GP"), "Some other place!");
    })

});