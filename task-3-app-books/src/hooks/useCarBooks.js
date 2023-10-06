import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const removeFromCart = (bookId) => {
    setCart(cart.filter(book => book.id !== bookId));
  };

  return { cart, addToCart, removeFromCart };
};

export default useCart;
