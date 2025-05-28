import '../styles/cart.css'

const Cart = ({ cart, removeFromCart, isOpen, onClose, totalPrice }) => {

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2>Carrito</h2>
        <button onClick={onClose} className='close-button'>X</button>
      </div>
      {cart.map(product => (
        <div className='cart-products' key={product.id}>
          <img src={product.thumbnail} alt={product.name} />
          <div>
            <p>{product.name}</p>
            <p>Cantidad: {product.cant}</p>
            <p>Precio: ${(product.price * product.cant).toFixed(2)}</p>
            <button onClick={() => removeFromCart(product)}>borrar</button>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <h2>Precio Total: ${totalPrice.toFixed(2)}</h2>
      )}
    </div>
  )
}

export default Cart