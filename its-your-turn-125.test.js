const last_element = require('./its-your-turn-125');

test('reads the last element of an array', () => {
    expect(last_element([1, 2, 3, 4])).toBe(4);
    expect(last_element([1, 2, 3])).toBe(3);
    expect(last_element([1])).toBe(1);
    expect(last_element([])).toBe(undefined);
});