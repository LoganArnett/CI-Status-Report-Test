const assert = require('assert');

const { stringAddition } = require('../');

describe('Test Suite', () => {
  describe('stringAddition helper', () => {
    it('should add strings and return a number', () => {
      assert.equal(stringAddition('1', '3'), 4);
    });
    
    it('should add strings and return a number', () => {
      assert.equal(stringAddition('3', '3'), 3);
    });
  });
});
