import { useState } from 'react'
import Button from './Button'
import Plus from './assets/icon-plus.svg'
import Minus from './assets/icon-minus.svg'
import Cart from '../../../assets/icon-cart.svg'
import './styles/AddToCart.css'

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1)
  const [isHoverMinus, setIsHoverMinus] = useState(false)
  const [isHoverPlus, setIsHoverPlus] = useState(false)

  const handleHoverIn = (isPlus) => {
    return () => {
      isPlus
        ? setIsHoverPlus(true)
        : setIsHoverMinus(true)
    }
  }

  const handleHoverOut = (isPlus) => {
    return () => {
      isPlus
        ? setIsHoverPlus(false)
        : setIsHoverMinus(false)
    }
  }

  const handleClick = (isPlus) => {
    let finalQuantity
    isPlus
      ? finalQuantity = quantity + 1
      : quantity === 0
        ? finalQuantity = 0
        : finalQuantity = quantity - 1
    return () => setQuantity(finalQuantity)
  }
  return (
    <form className='add-to-cart'>
      <fieldset className='quantity'>
        <Button handleClick={handleClick(false)} onMouseEnter={handleHoverIn(false)} onMouseLeave={handleHoverOut(false)} isHover={isHoverMinus}>
          <Minus className='filter' width='12' height='4' />
        </Button>
        <input className='quantity-value' type='text' name='quantity' value={quantity} />
        <Button handleClick={handleClick(true)} onMouseEnter={handleHoverIn(true)} onMouseLeave={handleHoverOut(true)} isHover={isHoverPlus}>
          <Plus width='12' height='12' />
        </Button>
      </fieldset>
      <button className='add' type='submit'>
        <Cart className='cart-white' width='22' height='20' viewBox='0 0 25 25' />
        Add to cart
      </button>
    </form>
  )
}

export default AddToCart
