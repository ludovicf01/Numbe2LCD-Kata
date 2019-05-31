const expect = require('chai').expect;
const transform = require('../src/index.ts').transform;
 
describe('Index', () => {
    describe('digit Transfomer', () => {
        it('should return the digital of 1', function () {
            let digit = transform('1');
            expect(digit).to.eql([' ', ' |',' |']);
        });
        it('should return the digital of 2', function () {
            let digit = transform('2');
            expect(digit).to.eql([' _ ', ' _|','|_']);
        });
        it('should return the digital of 3', function () {
            let digit = transform('3');
            expect(digit).to.eql([' _', ' _|',' _|']);
        });
    });
});