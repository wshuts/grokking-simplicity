const functions = require('./its-your-turn-275');

var object1 = {
  key001: 'value001'
  };

var object2 = {
  key001: 'value001',
  foo: 'bar'
  };

var sequence = function(object1) {
  functions.objectSet(object1, 'foo', 'bar');
  return object1;
};

test('objectSet as callback', () => {
    expect(functions.objectSet(object1, 'foo', 'bar'))
    .toStrictEqual(object2);
});

test('object1 is unchanged', () => {
    expect(sequence(object1))
    .toStrictEqual(object1);
});

test('objectDelete callback', () => {
    expect(functions.objectDelete(object2, 'foo'))
    .toStrictEqual(object1);
});
