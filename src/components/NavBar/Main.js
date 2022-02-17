import Logo from './assets/logo.svg'
import Cart from './assets/icon-cart.svg'
import Avatar from './assets/image-avatar.png'
import './styles/Main.css'

const NavBar = () => {
  return (
    <nav className="nav-container container">
      <div className="nav-container-left">
        <a href="/" target="_blank">
          <img src={Logo} alt="sneaker logo" />
        </a>
        <ul>
          <li><a href="/" target="_blank">Collections</a></li>
          <li><a href="/" target="_blank">Men</a></li>
          <li><a href="/" target="_blank">Women</a></li>
          <li><a href="/" target="_blank">About</a></li>
          <li><a href="/" target="_blank">Contact</a></li>
        </ul>
      </div>

      <div className="nav-container-right">
        <a href="/" target="_blank">
          <img className="cart-logo" src={Cart} alt="cart" />
        </a>
        <a href="/" target="_blank">
          <img className="avatar" src={Avatar} alt="profile picture" />
        </a>
      </div>
      
    </nav>
  )
}

export default NavBar