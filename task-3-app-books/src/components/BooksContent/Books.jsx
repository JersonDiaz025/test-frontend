import "./index.css";

const Books = ({ books, handleAddToCart }) => {
  return (
    <div className="card-container">
      {books?.map((book) => (
        <div key={book.id} className="card">
          <img
            src={book?.volumeInfo.imageLinks?.thumbnail}
            alt="Book Cover"
            className="image-book"
          />

          <div className="content-cards">
            <div className="title-book">{book.volumeInfo?.title}</div>
            <div className="description">{book.volumeInfo.description}</div>
            <button className="btn-cart" onClick={() => handleAddToCart(book)}>
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
