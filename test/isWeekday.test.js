import assert from 'assert'
import isWeekday from '../isWeekday.js';

describe("Is Weekday", function(){
    it("Weekday it is", function(){
        assert.equal(isWeekday("Monday"), true);
    }),
    it("Weekday it is", function(){
        assert.equal(isWeekday("Tuesday"), true);
    }),
    it("Weekday it is", function(){
        assert.equal(isWeekday("Wednesday"), true);
    }),
    it("Weekday it is", function(){
        assert.equal(isWeekday("Thursday"), true);
    }),
    it("Weekday it is", function(){
        assert.equal(isWeekday("Friday"), true);
    }),
    it("Not Weekday", function(){
        assert.equal(isWeekday("Saturday"), false);
    }),
    it("Not Weekday", function(){
        assert.equal(isWeekday("Sunday"), false);
    });
});