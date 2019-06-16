import { add } from "../src/math";
import { expect } from 'chai';

describe('math: add', testAdd)

function testAdd()
{
    it('should return sum of the two arguments', testSum)

    function testSum()
    {
        expect(5+3).to.equal(8);
        expect(1+4).to.equal(5);
        expect(7+2).to.equal(9);
    }
}