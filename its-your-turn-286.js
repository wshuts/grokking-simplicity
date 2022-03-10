const functions = {
  makeAdder: makeAdder
};

function makeAdder(a) {
  return function(b) {
    return a + b;
  };
}

module.exports = functions;
