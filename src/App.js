import NavBar from './components/NavBar/Main'
import Product from './components/Product/MainContainer'
import { CartContextProvider } from './context/CartContext'

const App = () => {
  return (
    <CartContextProvider>
      <NavBar />
      <Product />
    </CartContextProvider>
  )
}

export default App
