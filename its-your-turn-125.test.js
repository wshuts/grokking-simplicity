const functions = require('./its-your-turn-125');

test('reads the last element of an array', () => {
    expect(functions.last_element([1, 2, 3, 4])).toBe(4);
    expect(functions.last_element([1, 2, 3])).toBe(3);
    expect(functions.last_element([1])).toBe(1);
    expect(functions.last_element([])).toBe(undefined);
});

test('drops the last element of an array', () => {
    expect(functions.drop_last([1, 2, 3, 4])).toBe([1, 2, 3, 4]);
});