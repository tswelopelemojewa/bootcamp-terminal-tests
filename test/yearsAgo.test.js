import assert from 'assert'
import yearsAgo from '../yearsAgo.js';


describe("Years Ago", function(){
    it("4 years", function(){
        assert.equal((new Date().getFullYear() - 2019), yearsAgo(2019));
    }),

    it("13 years", function(){
        assert.equal((new Date().getFullYear() - 2010), yearsAgo(2010))
    });
});