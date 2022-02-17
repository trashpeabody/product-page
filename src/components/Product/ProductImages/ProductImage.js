import Images from './Images'
import './styles/ProductImage.css'

const ProductImage = () => {
  return (
    <div className='product-image-container'>
      <Images isLightBox={false} />
    </div>
  )
}

export default ProductImage
