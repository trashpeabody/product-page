import { useContext } from 'react'
import CartIcon from '../../assets/icon-cart.svg'
import CartContext from '../../context/CartContext'
import './styles/Cart.css'

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
    <>
      <div className='cart'>
        <CartIcon width='22' height='20' onClick={handleOpenCart} />
      </div>
    </>
  )
}

export default Cart
