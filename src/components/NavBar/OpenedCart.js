import Checkout from './Checkout'
import TrashIcon from './assets/icon-delete.svg'
import Thumb from '../Product/ProductImages/assets/image-product-1-thumbnail.jpg'
import Context from '../../context/CartContext'
import './styles/OpenedCart.css'
import { useContext } from 'react'

const OpenedCart = () => {
  const { products } = useContext(Context)
  return (
    <div className='opened-cart'>
      <h2>Cart</h2>
      {products.length === 0
        ? (<div className='cart-items-container empty' />)
        : (
          <div className='cart-items-container'>
            <div className='cart-item'>
              <img className='cart-thumb' src={Thumb} alt='thumbnail in cart' />
              <div className='cart-item-details'>
                <p>Fall limited edition Snickers</p>
                <p>$125.00 x 3<span>$375.00</span></p>
              </div>
              <TrashIcon />
            </div>
            <Checkout />
          </div>
          )}
    </div>
  )
}

export default OpenedCart
