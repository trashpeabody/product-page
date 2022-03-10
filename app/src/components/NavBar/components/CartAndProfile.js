import { useContext } from 'react'
import CartIcon from '../../../assets/icon-cart.svg'
import Context from '../../../context/NavBarContext'
import OpenedCart from './OpenedCart'
import LoginForm from './LoginForm'
import UserContext from '../../../context/UserContext'

const CartAndProfile = () => {
  const { cartOpened, setCartOpened, profileOpened, setProfileOpened } = useContext(Context)
  const { user } = useContext(UserContext)

  const handleOpenCart = () => {
    setCartOpened(!cartOpened)
  }

  const handleOpenProfile = () => {
    setProfileOpened(!profileOpened)
  }

  return (
    <>
      <div className='nav-container__right'>
        <CartIcon className='pointer' width='22' height='20' onClick={handleOpenCart} />
        <img onClick={handleOpenProfile} className='avatar pointer' src={user.url} alt='profile picture' />
      </div>
      <OpenedCart isOpened={cartOpened} />
      <LoginForm isOpened={profileOpened} />
    </>

  )
}

export default CartAndProfile
