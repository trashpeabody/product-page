import Navigation from './components/Navigation'
import CartAndProfile from './components/CartAndProfile'

const NavBar = () => {
  return (
    <nav className='nav-container container'>
      <Navigation />
      <CartAndProfile />
    </nav>
  )
}

export default NavBar
