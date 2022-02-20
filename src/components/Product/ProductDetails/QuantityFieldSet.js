import Button from './Button'
import Plus from './assets/icon-plus.svg'
import Minus from './assets/icon-minus.svg'
import './styles/QuantityFieldSet.css'

const QuantityFieldSet = ({ quantity, setQuantity }) => {
  const handleClick = (isPlus) => {
    let finalQuantity
    isPlus
      ? finalQuantity = quantity + 1
      : quantity === 0
        ? finalQuantity = 0
        : finalQuantity = quantity - 1
    return () => setQuantity(finalQuantity)
  }

  const onChangeQuantity = (event) => {
    setQuantity(event.target.value)
  }

  return (
    <fieldset className='quantity'>

      <Button className='change-quantity' handleClick={handleClick(false)} type='button'>
        <Minus className='filter' width='12' height='4' />
      </Button>

      <input className='quantity-value' type='text' name='quantity' value={quantity} onChange={onChangeQuantity} />

      <Button className='change-quantity' handleClick={handleClick(true)} type='button'>
        <Plus width='12' height='12' />
      </Button>

    </fieldset>
  )
}

export default QuantityFieldSet
