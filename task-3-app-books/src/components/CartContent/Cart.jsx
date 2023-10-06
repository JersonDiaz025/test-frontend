import './index.css'

const Cart = ({ cart }) => {
  return (
    <div className='container-cart'>
      <div className="cart">
        <h2>Carrito</h2>
        <ul>
          {cart?.map((title, index) => (
            <li className='items-li' key={index}>{title}</li>
          ))}
        </ul>
        <p>Total de libros en el carrito: {cart.length}</p>
      </div>
    </div>
  );
};

export default Cart;
