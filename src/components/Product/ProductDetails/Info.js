import Details from './Details'
import AddToCart from './AddToCart'
import './styles/Info.css'

const Info = ({ product }) => {

  return (
    <div className="product-info-container">
      <Details product={product} />
      <AddToCart />
    </div>
  )
}

export default Info