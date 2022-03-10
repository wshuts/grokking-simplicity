const functions = require('./its-your-turn-286');

var increment = functions.makeAdder(1);

test('makeAdder with argument of 1', () => {
  expect(increment(10))
  .toBe(11);
});

var plus10 = functions.makeAdder(10);

test('makeAdder with argument of 10', () => {
  expect(plus10(12))
  .toBe(22);
});