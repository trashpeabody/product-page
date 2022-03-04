import { useContext, useState } from 'react'
import CartIcon from '../../../assets/icon-cart.svg'
import CartContext from '../../../context/CartContext'
import Avatar from '../assets/image-avatar.png'
import OpenedCart from './OpenedCart'
import LoginForm from './LoginForm'

const CartAndProfile = () => {
  const { cartOpened, setCartOpened } = useContext(CartContext)
  const [isProfileOpened, setIsProfileOpened] = useState(false)

  const handleOpenCart = () => {
    setCartOpened(!cartOpened)
  }

  const handleOpenProfile = () => {
    setIsProfileOpened(!isProfileOpened)
  }

  return (
    <>
      <div className='nav-container__right'>
        <CartIcon className='pointer' width='22' height='20' onClick={handleOpenCart} />
        <img onClick={handleOpenProfile} className='avatar pointer' src={Avatar} alt='profile picture' />
      </div>
      <OpenedCart isOpened={cartOpened} />
      <LoginForm isOpened={isProfileOpened} />
    </>

  )
}

export default CartAndProfile
