import { useContext, useState } from 'react'
import Button from './Button'
import CartContext from '../../../context/CartContext'
import Cart from '../../../assets/icon-cart.svg'
import './styles/AddToCart.css'
import QuantityFieldSet from './QuantityFieldSet'

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1)
  const { products, setProducts } = useContext(CartContext)

  const addProduct = (event) => {
    event.preventDefault()
    const newProduct = {
      index: 1,
      quantity: { quantity }
    }
    setProducts(products.concat(newProduct))
    document.querySelector('.opened-cart').style.display = 'block'
  }

  return (
    <form className='add-to-cart' onSubmit={addProduct}>
      <QuantityFieldSet quantity={quantity} setQuantity={setQuantity} />
      <Button className='add' type='submit'>
        <Cart className='cart-white' width='22' height='20' viewBox='0 0 25 25' />
        Add to cart
      </Button>
    </form>
  )
}

export default AddToCart
