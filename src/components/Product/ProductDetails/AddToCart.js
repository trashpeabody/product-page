import { useState, useContext } from 'react'
import Button from './Button'
import Cart from '../../../assets/icon-cart.svg'
import './styles/AddToCart.css'
import QuantityFieldSet from './QuantityFieldSet'
import CartContext from '../../../context/CartContext'

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1)
  const { products, setProducts, setCartOpened } = useContext(CartContext)

  const addProduct = (newProduct) => {
    const index = products.findIndex((product) => product.index === newProduct.index)
    if (index > -1) {
      const newQuantity = products[index].quantity + quantity
      setProducts(
        products.map(
          product => product.index === newProduct.index
            ? { ...product, quantity: newQuantity }
            : product))
    } else {
      setProducts(products.concat(newProduct))
    }
    document.querySelector('.opened-cart').style.display = 'block'
    setCartOpened(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (quantity > 0) {
      const newProduct = {
        index: 1,
        quantity: quantity
      }
      addProduct(newProduct)
    } else {
      console.log('empty')
    }
  }

  return (
    <form className='add-to-cart' onSubmit={handleSubmit}>
      <QuantityFieldSet quantity={quantity} setQuantity={setQuantity} />
      <Button className='add' type='submit'>
        <Cart className='cart-white' width='22' height='20' viewBox='0 0 25 25' />
        Add to cart
      </Button>
    </form>
  )
}

export default AddToCart
