const functions = {
    objectSet: objectSet,
    setPrice: setPrice
};

function objectSet(object, key, value) {
    var object_copy = Object.assign({}, object);
    object_copy[key] = value;
    return object_copy;
}

function setPrice(item, new_price) {
    return functions.objectSet(item, 'price', new_price);
}

module.exports = functions;