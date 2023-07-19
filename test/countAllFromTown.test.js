import assert from 'assert'
import countAllFromTown from '../countAllFromTown.js';

describe("All from Town", function(){
    it("3 found", function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
    })
}); 

