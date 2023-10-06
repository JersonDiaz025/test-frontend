import "./index.css";

const Form = ({query, handleSearch}) => {
  return (
    <div className="content-form">
      <form onSubmit={handleSearch} className="form">
        <input
          className="input"
          type="text"
          value={query}
          onChange={(e) => handleSearch(e)}
          placeholder="Buscar libros..."
        />
      </form>
    </div>
  );
};

export default Form;
