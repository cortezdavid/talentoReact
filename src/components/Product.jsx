import { Link } from 'react-router-dom'
import '../styles/product.css'

const Product = ({ product, addToCart }) => {

  return (
    <Link to={`/producto/${product.id}`}>
      <div className='product-card'>
        <img className='pinture' src={product.thumbnail} alt={product.title} />
        <h3 className='product-name'>{product.title}</h3>
        <p className='product-price'>{product.price}</p>
      </div>
    </Link>
  )
}

export default Product