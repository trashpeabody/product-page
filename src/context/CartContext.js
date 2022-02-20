import { createContext, useState } from 'react'

const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  return (
    <CartContext.Provider value={{ products, setProducts, cartOpened, setCartOpened }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
