const functions = require('./its-your-turn-125');

test('reads the last element of an array', () => {
    expect(functions.last_element([1, 2, 3, 4])).toBe(4);
    expect(functions.last_element([1, 2, 3])).toBe(3);
    expect(functions.last_element([1])).toBe(1);
    expect(functions.last_element([])).toBe(undefined);
});

test('drops the last element of an array', () => {
    expect(functions.drop_last([1, 2, 3, 4])).toStrictEqual([1, 2, 3]);
});

test('drops the last element of an array', () => {
    expect(functions.pop([1, 2, 3, 4])).toStrictEqual(
        {
            last_element:4,
            array:[1, 2, 3]
        });
});

test('drops the last element of an array', () => {
    expect(functions.pop_v2([9, 8, 7, 6])).toStrictEqual(
        {
            last_element:6,
            array:[9, 8, 7]
        });
});