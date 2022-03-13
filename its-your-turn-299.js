const objectLibrary = require('./objectLibrary');

const functions = {
  createAddressFrom: createAddressFrom,
  map: map
};

function createAddressFrom(customer) {
  var address = {};
  address = objectLibrary.objectSet(address, 'firstName', customer.firstName);
  address = objectLibrary.objectSet(address, 'lastName', customer.lastName);
  address = objectLibrary.objectSet(address, 'address', customer.address);
  return address;
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
