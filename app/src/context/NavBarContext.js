import { createContext, useState } from 'react'

const NavBarContext = createContext({})

export const NavBarContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [profileOpened, setProfileOpened] = useState(false)

  return (
    <NavBarContext.Provider value={{ products, setProducts, cartOpened, setCartOpened, profileOpened, setProfileOpened }}>
      {children}
    </NavBarContext.Provider>
  )
}

export default NavBarContext
