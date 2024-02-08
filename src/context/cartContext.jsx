import { Children } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const productInTheCartIndex = cart.findIndex(
      (item) => item.id === product.id
    )
    if (productInTheCartIndex >= 0) {
      // create a new cart in order to modify it for later set that modification to the state
      const newCart = structuredClone(cart)
      newCart[productInTheCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  const clearCart = () => {
    setCart([])
  }

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
