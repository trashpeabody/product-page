import TrashIcon from '../assets/icon-delete.svg'
import Thumb from '../../Product/ProductImages/assets/image-product-1-thumbnail.jpg'
import Context from '../../../context/NavBarContext'
import { useContext } from 'react'
import { productsList } from '../../../products'

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
      <img className='cart-item__thumb' src={Thumb} alt='thumbnail in cart' />
      <div className='cart-item__details'>
        <p>{displayProduct.name}</p>
        <p>${displayProduct.price} x {product.quantity}<span>${displayProduct.price * product.quantity}</span></p>
      </div>
      <TrashIcon className='pointer' onClick={removeItem} />
    </div>
  )
}

export default CartItem
