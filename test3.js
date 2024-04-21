const Products = [
    { id: 1, name: 'Product-1', price: 100 },
    { id: 2, name: 'Product-2', price: 200 },
    { id: 3, name: 'Product-3', price: 300 },
  ];
  
  let cart = [];
  
  function addToCart(productId) {
    const product = Products.find(product => product.id === productId);
    
    if (product) {
      const existingCartItem = cart.find(item => item.product.id === productId);
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        cart.push({ product, quantity: 1 });
      }
      updateCartDisplay();
    }
  }
  
  function removeFromCart(productId) {
    const existingCartItemIndex = cart.findIndex(item => item.product.id === productId);
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cart[existingCartItemIndex];
      if (existingCartItem.quantity === 1) {
        cart.splice(existingCartItemIndex, 1);
      } else {
        existingCartItem.quantity -= 1;
      }
      updateCartDisplay();
    }
  }
  
  function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    cartItemsElement.innerHTML = '';
    
    cart.forEach(item => {
      const cartItemElement = document.createElement('div');
      cartItemElement.textContent = `${item.product.name} (Qty: ${item.quantity}) - $${item.product.price * item.quantity}`;
      cartItemsElement.appendChild(cartItemElement);
    });
    
    const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    cartTotalElement.textContent = `Total Price: $${totalPrice}`;
  }
  