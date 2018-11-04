const enumerate = require('./');
const assume = require('assume');

describe('Enumerator', function () {
  it('is a function', function () {
    assume(enumerate).is.a('function');
  });
})