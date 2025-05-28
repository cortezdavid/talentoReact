import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Details from './pages/Details'
import Error from './pages/Error'
import Login from './pages/Login'
import Admin from './pages/Admin'
import AuthRoute from './auth/AuthRoute'

function App() {

  const [cart, setCart] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const addToCart = (product) => {
    const existe = cart.find(item => item.id === product.id)
    if (existe) {
      setCart(cart.map(item => item.id === product.id ? { ...item, cant: item.cant + 1 } : item))
    } else {
      setCart([...cart, { ...product, cant: 1 }])
    }
  }

  const removeFromCart = (product) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === product.id) {
          if (item.cant > 1) {
            return { ...item, cant: item.cant - 1 }
          } else {
            return null
          }
        } else {
          return item
        }
      }).filter(item => item !== null)
    })
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.cant, 0);

  return (
    <Router>
      <Nav cart={cart} removeFromCart={removeFromCart} totalPrice={totalPrice} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/productos' element={<Products addToCart={addToCart} />} />
        <Route path='/producto/:id' element={<Details addToCart={addToCart} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AuthRoute isAuthenticated={isAuthenticated}> <Admin /> </AuthRoute>} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
