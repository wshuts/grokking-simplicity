const item = require('./item');

const functions = {
  isInCart: isInCart,
  indexOfItem: indexOfItem,
  setPriceByName: setPriceByName
};

function isInCart(cart, name) {
  return indexOfItem(cart, name) !== null;
}

function getItemByName(cart, name) {
  var index = indexOfItem(cart, name);
  if(index !== null)
    return cart[index];
  return null;
}

function indexOfItem(cart, name) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].name === name)
    return i;
  }
  return null;
}

function  setPriceByName(cart, name, price) {
  var index = indexOfItem(cart, name);
  var named_item = getItemByName(cart, name);
  if(named_item !== null)
    return arraySet(cart, index, item.setPrice(named_item, price));
  return cart;
}

function arraySet(array, idx, value) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}

module.exports = functions;