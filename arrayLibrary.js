const functions = {
  forEach: forEach
};

function forEach(array, procedure) {
  for(var i = 0; i < array.length; i++) {
    var item = array[i];
    procedure(item);
  }
}

module.exports = functions;
