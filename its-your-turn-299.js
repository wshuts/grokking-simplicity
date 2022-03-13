const functions = {
  createAddressFrom: createAddressFrom,
  map: map
};

function createAddressFrom(customer) {
  return {
    firstName: customer.firstName,
    lastName: customer.lastName,
    address: customer.address
  };
}

function map(array, transform) {
  var newArray = [];
  forEach(array, function(element) {
    newArray.push(transform(element));
  });
  return newArray; 
}

function forEach(array, procedure) {
  for(var i = 0; i < array.length; i++) {
    var item = array[i];
    procedure(item);
  }
}

module.exports = functions;
