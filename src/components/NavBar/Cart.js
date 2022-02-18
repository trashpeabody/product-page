import { useState } from 'react'
import CartIcon from '../../assets/icon-cart.svg'
import './styles/Cart.css'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenCart = () => {
    const openedCart = document.querySelector('.opened-cart')
    isOpen
      ? openedCart.style.display = 'none'
      : openedCart.style.display = 'block'
    setIsOpen(!isOpen)
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
