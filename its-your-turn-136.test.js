const functions = require('./its-your-turn-136');

test('copy-on-write object key value creation', () => {
    expect(functions.objectSet({}, 'price', 37)).toStrictEqual(
        {
            price:37
        });
});