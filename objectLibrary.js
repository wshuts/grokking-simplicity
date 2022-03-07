const objectLibrary = {
  objectSet: objectSet,
  objectDelete: objectDelete
  
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

module.exports = objectLibrary;
