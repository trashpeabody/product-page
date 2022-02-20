import TrashIcon from './assets/icon-delete.svg'
import Thumb from '../Product/ProductImages/assets/image-product-1-thumbnail.jpg'
import Context from '../../context/CartContext'
import { useContext } from 'react'
import { productsList } from '../../products'
import './styles/CartItem.css'

const CartItem = ({ product }) => {
  const displayProduct = productsList.find(element => element.index === product.index)
  const { products, setProducts } = useContext(Context)
  const removeItem = () => {
    setProducts(
      products.filter(
        element => element.index !== product.index))
  }
  return (
    <div className='cart-item'>
      <img className='cart-thumb' src={Thumb} alt='thumbnail in cart' />
      <div className='cart-item-details'>
        <p>{displayProduct.name}</p>
        <p>${displayProduct.price} x {product.quantity}<span>${displayProduct.price * product.quantity}</span></p>
      </div>
      <TrashIcon className='trash' onClick={removeItem} />
    </div>
  )
}

export default CartItem
