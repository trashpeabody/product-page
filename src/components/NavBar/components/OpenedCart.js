import Context from '../../../context/CartContext'
import { useContext } from 'react'
import CartItem from './CartItem'

const OpenedCart = () => {
  const { products } = useContext(Context)
  return (
    <div className='opened-cart'>

      <h2>Cart</h2>
      {products.length === 0
        ? <div className='opened-cart__items-container empty'>
          <p>Your cart is empty.</p>
          {/* eslint-disable-next-line react/jsx-closing-tag-location */}
        </div>
        : <div className='opened-cart__items-container'>
          {products.map(product =>
            <CartItem key={product.index} product={product} />
          )}
          <a className='checkout'>Checkout</a>
          {/* eslint-disable-next-line react/jsx-closing-tag-location */}
        </div>}
    </div>
  )
}

export default OpenedCart
