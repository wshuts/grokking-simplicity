const functions = {
  arraySet: arraySet
};

function withArrayCopy(array, modifier) {
  copy = array.slice();
  modifier(copy);
  return copy;
}

function arraySet(array, index, value) {
  return withArrayCopy(array, function(copy) {
    copy[index] = value;
  })
}
 

module.exports = functions;