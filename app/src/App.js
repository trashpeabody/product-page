import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/Main'
import Product from './components/Product/MainContainer'
import { NavBarContextProvider } from './context/NavBarContext'
import SignUp from './components/SignUp/SignUp'
import { UserContextProvider } from './context/UserContext'

const App = () => {
  return (
    <UserContextProvider>
      <NavBarContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </NavBarContextProvider>
    </UserContextProvider>
  )
}

export default App
