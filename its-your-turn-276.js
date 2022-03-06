const functions = {
  tryCatch: tryCatch  
};

function tryCatch(tryProcedure, catchProcedure) {
  try {
    return tryProcedure();
  } catch(error) {
    return catchProcedure(error);
  }  
}

module.exports = functions;
