import { useState, useEffect } from 'react'
import Product from '../components/Product'
import Loading from '../components/Loading'
import '../styles/products.css'

const Products = ({ addToCart }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
        setLoading(false)
      })
  }, [])

  return (
    <main>
      <section>
        <h2>Productos</h2>
        {loading ? (
          <Loading />
        ) : (
          <section>
            <div className='products-container'>
              {products.map(product => (
                <Product key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  )
}

export default Products
