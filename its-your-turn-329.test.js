const functions = require('./its-your-turn-329.js');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = 5.5;

test('Compute an average', () => {
    expect(functions.average(numbers))
    .toStrictEqual(average);
});



