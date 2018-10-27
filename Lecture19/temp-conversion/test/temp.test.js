const chai =  require('chai');
const convert = require('../conversion');
const assert = chai.assert;

describe('Celsius to fahrenheit',function () {

    it('should return 203',function () {
        assert.equal(convert.ctof(95),203)
    });


    it('should return 212',function () {
        assert.equal(convert.ctof(100),212);
    })

    it('should return undefined',function () {
        assert.isUndefined(convert.ctof("abc"))
    })

})