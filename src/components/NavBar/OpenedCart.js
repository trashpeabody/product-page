import Context from '../../context/CartContext'
import './styles/OpenedCart.css'
import { useContext } from 'react'
import CartItem from './CartItem'
import Checkout from './Checkout'

const OpenedCart = () => {
  const { products } = useContext(Context)
  return (
    <div className='opened-cart'>
      <h2>Cart</h2>
      {products.length === 0
        ? <div className='cart-items-container empty' />
        : <div className='cart-items-container'>
          {products.map(product =>
            <CartItem key={product.index} product={product} />
          )}
          <Checkout />
          {/* eslint-disable-next-line react/jsx-closing-tag-location */}
        </div>}
    </div>
  )
}

export default OpenedCart
