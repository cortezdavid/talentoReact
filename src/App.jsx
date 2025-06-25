import { useContext } from 'react'
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
import { CartContext } from './context/CartContext'

function App() {

  const { cart, addToCart, removeFromCart, totalPrice, isAuthenticated } = useContext(CartContext)

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
