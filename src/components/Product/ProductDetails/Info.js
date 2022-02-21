import Details from './components/Details'
import AddToCart from './components/AddToCart'

const Info = ({ product }) => {
  return (
    <div className='product-info-container'>
      <Details product={product} />
      <AddToCart />
    </div>
  )
}

export default Info
