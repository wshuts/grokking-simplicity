const functions = require('./its-your-turn-273');

var array1 = [0, 1, 2];
var array2 = [0, 1, 9];

test('arraySet as callback', () => {
    expect(functions.arraySet(array1, 2, 9)).toStrictEqual(array2);
});

var sequence = function(array1) {
  functions.arraySet(array1, 2, 9);
  return array1;
};

test('array1 is unchanged', () => {
    expect(sequence(array1))
    .toStrictEqual(array1);
});