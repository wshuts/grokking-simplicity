const functions = {
    objectSet: objectSet,
    setPrice: setPrice,
    setQuantity: setQuantity,
    objectDelete: objectDelete,
    setQuantityByName: setQuantityByName
};

function objectSet(object, key, value) {
    var object_copy = Object.assign({}, object);
    object_copy[key] = value;
    return object_copy;
}

function objectDelete(object, key) {
    var object_copy = Object.assign({}, object);
    delete object_copy[key];
    return object_copy;
}

function setPrice(item, new_price) {
    return functions.objectSet(item, 'price', new_price);
}

function setQuantity(item, new_quantity) {
    return functions.objectSet(item, 'quantity', new_quantity);
}

function  setQuantityByName(cart, name, quantity) {
  var cart_copy = cart.slice();
  
  return cart_copy;
}

module.exports = functions;