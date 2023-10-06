import { useState } from "react";

const useCart = () => {
  // State 'cart' to store books in the cart
  const [cart, setCart] = useState([]);

  // Function to add a book to the cart
  const addToCart = (book) => {
    setCart([...cart, book.volumeInfo?.title]);
  };

  // Return the current state of the cart and functions to add and remove books
  return { cart, addToCart };
};

export default useCart;
