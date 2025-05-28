import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import Cart from './Cart'
import '../styles/nav.css'

const Nav = ({ cart, removeFromCart, totalPrice }) => {

  const [isCartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <img src="./logoc.png" alt="Logo" />
        </Link>

        <ul className='navbar-menu'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? 'navbar-item active' : 'navbar-item'}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contacto'
              className={({ isActive }) => isActive ? 'navbar-item active' : 'navbar-item'}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/productos'
              className={({ isActive }) => isActive ? 'navbar-item active' : 'navbar-item'}
            >
              Productos
            </NavLink>
          </li>
          <li className='navbar-cart'>
            <FaShoppingCart onClick={() => setCartOpen(true)} className='cart-icon' />
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              isOpen={isCartOpen}
              onClose={() => setCartOpen(false)}
              totalPrice={totalPrice}
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav