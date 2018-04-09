const assert = require('power-assert');
const sum = require('../sum');
describe('Sum', () => {

  it('shold return sum by two args', () => {
    assert.equal(sum(1, 1), 4);
  });
});
