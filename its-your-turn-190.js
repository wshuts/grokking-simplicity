const item = require('./item');

const functions = {
  isInCart: isInCart,
  indexOfItem: indexOfItem,
  setPriceByName: setPriceByName
};

function isInCart(cart, name) {
  return indexOfItem(cart, name) !== null;
}

function indexOfItem(cart, name) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].name === name)
    return i;
  }
  return null;
}

function  setPriceByName(cart, name, price) {
  var cartCopy = cart.slice();
  var i = indexOfItem(cart, name);
  if(i !== null) cartCopy[i] = item.setPrice(cartCopy[i], price);
  return cartCopy;
}

module.exports = functions;