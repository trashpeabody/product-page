import Navigation from './Navigation'
import Cart from './Cart'
import Avatar from './assets/image-avatar.png'
import './styles/Main.css'
import OpenedCart from './OpenedCart'

const NavBar = () => {
  return (
    <nav className='nav-container container'>
      <Navigation />

      <div className='nav-container-right'>
        <Cart />
        <a href='/' target='_blank'>
          <img className='avatar' src={Avatar} alt='profile picture' />
        </a>
        <OpenedCart />
      </div>
    </nav>
  )
}

export default NavBar
