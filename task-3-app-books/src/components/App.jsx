import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [query, setQuery] = useState('harry potter');

  const { books, loading } = useBookSearch(query);
  const { cart, addToCart } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target?.value)
    // Realizar una nueva búsqueda cuando se cambia la consulta
    // Aquí puedes utilizar un input para que el usuario escriba la consulta
    // y actualizar 'query' al valor del input.
  };

  const agregarAlCarrito = (book) => {
    // Agregar un libro al carrito
    addToCart([...cart, book]);
  };

  return (
    <div className="App">

      <header>
      <h1>Tienda de Libros</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar libros..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <div className="book-container">
          {books.map((book) => (
            <div key={book.id} className="card">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt="Book Cover"
                className="image-book"
              />
              <div className="content-cards">
                <div className="title-book">{book.volumeInfo.title}</div>
                <div className="description">{book.volumeInfo.description}</div>
                <button onClick={() => agregarAlCarrito(book)}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="cart">
        <h2>Carrito</h2>
        <ul>
          {cart?.map((book) => (
            <li key={book.id}>{book.volumeInfo.title}</li>
          ))}
        </ul>
        <p>Total de libros en el carrito: {cart.length}</p>
      </div>
    </div>
  );
}

export default App;
