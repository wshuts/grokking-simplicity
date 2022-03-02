const itemLibrary = require('./item');

const functions = {
  incrementQuantityByName: incrementQuantityByName,
  incrementSizeByName: incrementSizeByName,
  incrementFieldByName: incrementFieldByName
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

function incrementFieldByName(cart, name, field) {
  validateItemField(field);
  var item = cart[name];
  var value = item[field];
  var newValue = value + 1;
  var newItem = itemLibrary.objectSet(item, field, newValue);
  var newCart = itemLibrary.objectSet(cart, name, newItem);
  return newCart;
}

var validItemFields = ['quantity', 'size'];

function validateItemField(field) {
  if(!validItemFields.includes(field))
    throw "Not a valid item field: " + "'" + field + "'.";
}

module.exports = functions;