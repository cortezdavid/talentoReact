import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import '../styles/details.css'

const Details = ({ addToCart }) => {
	const { id } = useParams()
	const [product, setProduct] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then(res => res.json())
			.then(data => {
				setProduct(data)
				setLoading(false)
			})
			.catch(error => {
				console.log(error);
				setLoading(false)
			})
	}, [id])

	return (
		loading ? (
			<Loading />
		) : (
			<main>
				<section className='product-info'>
					<div className='product-image'>
						<img src={product.images[0]} alt={product.title} />
					</div>
					<div className='product-details'>
						<h2>{product.title}</h2>
						<p className="rating">Valoración: ⭐ {product.rating}/5</p>
						<p>{product.description}</p>
						<p className='price'>${product.price}</p>
						<button onClick={() => addToCart(product)}>Agregar al carrito</button>
					</div>
				</section>
			</main>
		)
	)
}

export default Details