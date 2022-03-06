const functions = {
  tryCatch: tryCatch  
};

function tryCatch(tryProcedure, catchProcedure) {
  return withTryCatch(tryProcedure, catchProcedure);  
}

function withTryCatch(tryProcedure, catchProcedure) {
  try {
    tryProcedure();
  }
  catch {
    catchProcedure();
  }  
}

module.exports = functions;
