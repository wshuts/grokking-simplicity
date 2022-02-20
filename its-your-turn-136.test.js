const functions = require('./its-your-turn-136');

test('copy-on-write object key value creation', () => {
    expect(functions.objectSet({}, 'price', 37)).toStrictEqual(
        {
            price:37
        });
});

test('copy-on-write object key value deletion', () => {
    expect(functions.objectDelete({price:101}, 'price')).toStrictEqual(
        {
        });
});

test('use objectSet in setPrice', () => {
    expect(functions.setPrice({}, 99)).toStrictEqual(
        {
            price:99
        });
});

test('use objectSet in setQuantity', () => {
    expect(functions.setQuantity({}, 14)).toStrictEqual(
        {
            quantity:14
        });
});