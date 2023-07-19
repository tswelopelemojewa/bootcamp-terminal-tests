import assert from 'assert'
import findItemsOver20 from '../findItemsOver20.js';

describe("Find Items over 20", function(){
    it("2 items found", function(){
       let items = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 21},
            {name : 'bananas', qty : 33}
        ];

        let res = [
            {name : 'pears', qty : 21},
            {name : 'bananas', qty : 33}   
        ];

        assert.deepEqual(res, findItemsOver20(items));
    })
});