import { useState } from "react";
import Header from "./Header/Header";
import Cart from "./CartContent/Cart";
import Form from "./Form/Form";
import Books from "./BooksContent/Books";
import useBookSearch from "../hooks/useGetBooks";
import useCart from "../hooks/useCarBooks";
import "../index.css";

function App() {
  const [query, setQuery] = useState("harry potter");
  const { books, loading } = useBookSearch(query);
  const { cart, addToCart, removeFromCart } = useCart();

  const handleSearch = (e) => {
    // Update value input
    setQuery(e.target?.value);
  };

  const handleAddToCart = (book) => {
    // Add kook to cart
    addToCart(book);
  };

  return (
    <div className="App">
      <Header />
      <Cart cart={cart} />
      <main>
        <Form query={query} handleSearch={handleSearch} />
        <div className="book-container">
          <Books books={books} handleAddToCart={handleAddToCart} />
        </div>
      </main>
    </div>
  );
}

export default App;
