import { useState } from "react"
import Button from './Button'
import Plus from '../../images/icon-plus.svg'
import Minus from '../../images/icon-minus.svg'

const AddToCart = () => {

  const [quantity, setQuantity] = useState(1)

  const handleClick = (isPlus) => {
    let finalQuantity
    isPlus
      ? finalQuantity = quantity+1
      : quantity === 0 
        ? finalQuantity = 0
        : finalQuantity = quantity-1
    return () => setQuantity (finalQuantity)
  }
  return (
    <form>
        <fieldset className="quantity">
          <Button handleClick={handleClick(false)} src={Minus} />
          <input className="quantity-value" type="text" name="quantity" value={quantity} />
          <Button handleClick={handleClick(true)} src={Plus} />
        </fieldset>
        <input className="add" type="button" value="Add to cart" />
      </form>
  )
}

export default AddToCart