const functions = {
    objectSet: objectSet,
    setPrice: setPrice,
    setQuantity: setQuantity
};

function objectSet(object, key, value) {
    var object_copy = Object.assign({}, object);
    object_copy[key] = value;
    return object_copy;
}

function setPrice(item, new_price) {
    return functions.objectSet(item, 'price', new_price);
}

function setQuantity(item, new_quantity) {
    return functions.objectSet(item, 'quantity', new_quantity);
}

module.exports = functions;