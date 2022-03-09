const functions = {
  procedureWithError: procedureWithError,
  wrapWithIgnoreErrors: wrapWithIgnoreErrors
};

function procedureWithError(a, b, c) {
  if(a === 0) throw 'Error!'
  return a + b + c;
}

function wrapWithIgnoreErrors(procedureThrowingIgnorableError) {
  
}

module.exports = functions;
