import assert from 'assert'
import findItemsOver from '../findItemsOver.js';

describe("Find Items Over", function(){
    it("1 Item over 30", function(){
        let items = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 21},
            {name : 'bananas', qty : 33}
        ];

        let res = [
            {name : 'bananas', qty : 33} 
        ];

        assert.deepEqual(findItemsOver(items, 30), res);
    });

    it("3 Items over 3", function(){
        let items = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 21},
            {name : 'bananas', qty : 33}
        ];

        let res = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 21},
            {name : 'bananas', qty : 33}   
        ];

        assert.deepEqual(findItemsOver(items, 3), res);
    })

});