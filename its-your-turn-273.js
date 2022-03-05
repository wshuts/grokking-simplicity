const functions = {
  arraySet: arraySet,
  push: push,
  drop_last: drop_last,
  drop_first: drop_first
};

function arraySet(array, index, value) {
  return withArrayCopy(array, function(copy) {
    copy[index] = value;
  })
}

function push(array, element) {
  return withArrayCopy(array, function(copy) {
    copy.push(element);
  })
}

function drop_last(array) {
  return withArrayCopy(array, function(copy) {
    copy.pop();
  })
}

function drop_first(array) {
  return withArrayCopy(array, function(copy) {
    copy.shift();
  })
}

function withArrayCopy(array, modifier) {
  copy = array.slice();
  modifier(copy);
  return copy;
}

module.exports = functions;