const functions = {
  logEmptyArray: logEmptyArray  
};

function logEmptyArray(array){
  when(array.length === 0, function() {
    console.log("Array is empty");
    });
}

function when(predicate, consequent) {
  if(predicate)
    return consequent();
}

module.exports = functions;
