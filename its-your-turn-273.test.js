const functions = require('./its-your-turn-273');

var array1 = [0, 1, 2];
var array2 = [0, 1, 9];
var array3 = [0, 1, 2, 99];
var array4 = [0, 1];
var array5 = [1, 2];

var sequence = function(array1) {
  functions.arraySet(array1, 2, 9);
  return array1;
};

test('arraySet as callback', () => {
    expect(functions.arraySet(array1, 2, 9))
    .toStrictEqual(array2);
});

test('array1 is unchanged', () => {
    expect(sequence(array1))
    .toStrictEqual(array1);
});

test('push callback', () => {
    expect(functions.push(array1, 99))
    .toStrictEqual(array3);
});

test('drop_last callback', () => {
    expect(functions.drop_last(array1))
    .toStrictEqual(array4);
});

test('drop_first callback', () => {
    expect(functions.drop_first(array1))
    .toStrictEqual(array5);
});