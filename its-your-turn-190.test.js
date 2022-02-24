const functions = require('./its-your-turn-190');

test('isInCart', () => {
    expect(functions.isInCart([{name:'widget', price:99}],'widget')).toStrictEqual(true);
});

test('indexOfItem', () => {
    expect(functions.indexOfItem([{name:'widget', price:99}],'widget')).toStrictEqual(0);
});

test('indexOfItem', () => {
    expect(functions.setPriceByName([{name:'widget', price:99}],'widget',88)).toStrictEqual([{name:'widget', price:88}]);
});