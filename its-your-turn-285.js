const functions = {
  procedureWithError: procedureWithError,
  wrapWithIgnoreErrors: wrapWithIgnoreErrors
};

function procedureWithError(a, b, c) {
  if(a === 0) throw 'Error!'
  return a + b + c;
}

function wrapWithIgnoreErrors(procedureThrowingIgnorableError) {
  try {
    return procedureThrowingIgnorableError(arg1, arg2, arg3);
  }
  catch(error) {
    return null;
  }
}

module.exports = functions;
