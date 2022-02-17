import Image1 from './assets/image-product-1.jpg'
import Image2 from './assets/image-product-2.jpg'
import Image3 from './assets/image-product-3.jpg'
import Image4 from './assets/image-product-4.jpg'
import Thumb1 from './assets/image-product-1-thumbnail.jpg'
import Thumb2 from './assets/image-product-2-thumbnail.jpg'
import Thumb3 from './assets/image-product-3-thumbnail.jpg'
import Thumb4 from './assets/image-product-4-thumbnail.jpg'
import './styles/Images.css'

const Images = () => {
  return (
    <>
      <img id="main-image-out" className="main-image" src={Image1} alt="Product main image" />
      <div className="thumbnails-container">
        <div className="selected thumbnail"><img src={Thumb1} alt="Product image thumbnail" /></div>
        <div className="thumbnail"><img src={Thumb2} alt="Product image thumbnail" /></div>
        <div className="thumbnail"><img src={Thumb3} alt="Product image thumbnail" /></div>
        <div className="thumbnail"><img src={Thumb4} alt="Product image thumbnail" /></div>
      </div>
    </>
  )
}

export default Images