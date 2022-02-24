const functions = {
  isInCart: isInCart,
  indexOfItem: indexOfItem
};

function isInCart(cart, name) {
  return indexOfItem(cart, name) !== null;
}

function indexOfItem(cart, name) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].name === name)
    return i;
  }
  return null;
}

module.exports = functions;