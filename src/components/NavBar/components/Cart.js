import { useContext } from 'react'
import CartIcon from '../../../assets/icon-cart.svg'
import CartContext from '../../../context/CartContext'

const Cart = () => {
  const { cartOpened, setCartOpened } = useContext(CartContext)

  const handleOpenCart = () => {
    const openedCart = document.querySelector('.opened-cart')
    cartOpened
      ? openedCart.style.display = 'none'
      : openedCart.style.display = 'block'
    setCartOpened(!cartOpened)
  }

  return (
    <CartIcon className='pointer' width='22' height='20' onClick={handleOpenCart} />
  )
}

export default Cart
