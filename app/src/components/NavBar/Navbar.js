import LogoAndLinks from './components/LogoAndLinks'
import CartAndProfile from './components/CartAndProfile'

const NavBar = ({ children, links, isEcommerce, profilePicture }) => {
  return (
    <nav className='nav-container container'>
      <LogoAndLinks links={links}>
        {children}
      </LogoAndLinks>

      <CartAndProfile isEcommerce profilePicture={profilePicture} />
    </nav>
  )
}

export default NavBar
