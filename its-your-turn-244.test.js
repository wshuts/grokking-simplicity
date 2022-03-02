const functions = require('./its-your-turn-244');

var item1 = {
  name: 'widget',
  quantity: 99,
  size: 0
};

var item2 = {
  name: 'widget',
  quantity: 99,
  size: 0
};

var item3 = {
  name: 'widget',
  quantity: 99,
  size: 0
};

var cart1 = {widget: item1};

var cart2 = {widget: item2};

var cart3 = {widget: item3};


test('incrementQuantityByName', () => {
    expect(functions.incrementQuantityByName(cart1, 'widget')).toStrictEqual(cart2);
});

test('incrementSizeByName', () => {
    expect(functions.incrementSizeByName(cart1, 'widget')).toStrictEqual(cart3);
});
