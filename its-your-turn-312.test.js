const arrayLibrary = require('./arrayLibrary');

test('map given empty array', () => {
    expect(arrayLibrary.map([], x => x * 2))
    .toStrictEqual([]);
});

test('filter given empty array', () => {
    expect(arrayLibrary.filter([], x => x >= 0))
    .toStrictEqual([]);
});

test('reduce given empty array', () => {
    expect(arrayLibrary.reduce([], 0, (acc, x) => acc + x))
    .toStrictEqual(0);
});

const numbers = [1, 2, 3, 4, 5];

test('map given x => x', () => {
    expect(arrayLibrary.map(numbers, x => x))
    .toStrictEqual(numbers);
});

test('filter given true', () => {
    expect(arrayLibrary.filter(numbers, _x => true))
    .toStrictEqual(numbers);
});

test('filter given false', () => {
    expect(arrayLibrary.filter(numbers, _x => false))
    .toStrictEqual([]);
});