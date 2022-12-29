import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/Navbar'
import Product from './components/Product/MainContainer'
import { NavBarContextProvider } from './context/NavBarContext'
import SignUp from './components/SignUp/SignUp'
import UserContext from './context/UserContext'
import Logo from './assets/logo.svg'
import Collection from './components/Collection/Collection'

const links = [
  {
    index: 0,
    title: 'Collections'
  },
  {
    index: 1,
    title: 'Men'
  },
  {
    index: 2,
    title: 'Women'
  },
  {
    index: 3,
    title: 'About'
  },
  {
    index: 4,
    title: 'Contact'
  }
]

const App = () => {
  const { user } = useContext(UserContext)

  return (
    <NavBarContextProvider>
      <BrowserRouter>
        <NavBar links={links} isEcommerce profilePicture={user.url}>
          {Logo}
        </NavBar>
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='/Collections' element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </NavBarContextProvider>
  )
}

export default App
