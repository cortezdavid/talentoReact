import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

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
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice, isAuthenticated }}>
      {children}
    </CartContext.Provider>
  )
}