import Navigation from './Navigation'
import Cart from './assets/icon-cart.svg'
import Avatar from './assets/image-avatar.png'
import './styles/Main.css'

const NavBar = () => {
  return (
    <nav className='nav-container container'>
      <Navigation />

      <div className='nav-container-right'>
        <a href='/' target='_blank'>
          <img className='cart-logo' src={Cart} alt='cart' />
        </a>
        <a href='/' target='_blank'>
          <img className='avatar' src={Avatar} alt='profile picture' />
        </a>
      </div>

    </nav>
  )
}

export default NavBar
