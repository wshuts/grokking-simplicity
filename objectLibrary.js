const arrayLibrary = require('./arrayLibrary');

const objectLibrary = {
  objectSet: objectSet,
  objectDelete: objectDelete,
  nestedUpdate: nestedUpdate
};

function objectSet(object, key, value) {
  return withObjectCopy(object, function(copy) {
    copy[key] = value;
  })
}

function objectDelete(object, key) {
  return withObjectCopy(object, function(copy) {
    delete copy[key];
  })
}

function withObjectCopy(object, modifier) {
  copy = Object.assign({}, object);
  modifier(copy);
  return copy;
}

function nestedUpdate(object, keys, modifier) {
  if(keys.length === 0) {
    return modifier(object);
  }
  var firstKey = keys[0];
  var restOfKeys = arrayLibrary.drop_first(keys);
  return update(object, firstKey, function(value) {
    return nestedUpdate(value, restOfKeys, modifier);
  });
}

function update(object, key, modifier) {
  var value = object[key];
  var modifiedValue = modifier(value);
  return objectSet(object, key, modifiedValue);
}

module.exports = objectLibrary;
