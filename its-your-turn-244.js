const itemLibrary = require('./item');

const functions = {
  incrementQuantityByName: incrementQuantityByName,
  incrementSizeByName: incrementSizeByName
};

function incrementQuantityByName(cart, name) {
  var item = cart[name];
  var quantity = item['quantity'];
  var newQuantity = quantity + 1;
  var newItem = itemLibrary.objectSet(item, 'quantity', newQuantity);
  var newCart = itemLibrary.objectSet(cart, name, newItem);
  return newCart;
}

function incrementSizeByName(cart, name) {
  var item = cart[name];
  var size = item['size'];
  var newSize = size + 1;
  var newItem = itemLibrary.objectSet(item, 'size', newSize);
  var newCart = itemLibrary.objectSet(cart, name, newItem);
  return newCart;
}

module.exports = functions;