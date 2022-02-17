import Details from './Details'
import AddToCart from './AddToCart'

const Info = ({ product }) => {

  return (
    <div className="product-info-container">
      <Details product={product} />
      <AddToCart />
    </div>
  )
}

export default Info