const objectLibrary = require('./objectLibrary');

const functions = {
  logEmptyArray: logEmptyArray,
  giveShoesForFree: giveShoesForFree,
  giveShoesForFreeImproved: giveShoesForFreeImproved
};

function logEmptyArray(array) {
  return when(array.length === 0, function() {
    return 'Array is empty';
  });
}

function giveShoesForFree(cart) {
  return when(hasItem(cart, 'shoes') , function() {
     return setPriceByName(cart, 'shoes', 0);
  });
}

function when(predicate, consequent) {
  if(predicate)
    return consequent();
}

function giveShoesForFreeImproved(cart) {
  return IF(hasItem(cart, "shoes"), function() {
    return setPriceByName(cart, "shoes", 0);
  }, function() {
    return cart;
  }); 
}

function IF(predicate, consequent, alternative) {
  if(predicate)
    return consequent();
  else
    return alternative();
}

function hasItem(cart, itemKey) {
  return cart.hasOwnProperty(itemKey);
}

function setPriceByName(cart, itemKey, price) {
  var item = cart[itemKey];
  var modifiedItem = setPrice(item, price);
  return objectLibrary.objectSet(cart, itemKey, modifiedItem);
}

function setPrice(item, new_price) {
    return objectLibrary.objectSet(item, 'price', new_price);
}

module.exports = functions;
