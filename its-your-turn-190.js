const functions = {
  isInCart: isInCart,
  indexOfItem: indexOfItem,
  setPriceByName: setPriceByName
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

function  setPriceByName(cart, name, price) {
  var cartCopy = cart.slice();
  for(var i = 0; i < cartCopy.length; i++) {
    if(cartCopy[i].name === name)
      cartCopy[i] = setPrice(cartCopy[i], price);
  }
  return cartCopy;
}

function setPrice(item, price) {
 item.price = price;
 return item; 
}

module.exports = functions;