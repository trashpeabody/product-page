import Info from './ProductDetails/Info'
import ImageContainer from './ProductImages/components/ImageContainer'
import { ImageSrcProvider } from '../../context/ImageContext'

const product = {
  name: 'Fall Limited Edition Sneakers',
  description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: '$125.00',
  hasDiscount: true,
  discount: '50%',
  prevPrice: '$250.00'
}

const MainContainer = () => {
  return (
    <main className='main-container container'>
      <ImageSrcProvider>
        <ImageContainer isLightBox={false} />
        <Info product={product} />
        <ImageContainer isLightBox />
      </ImageSrcProvider>
    </main>
  )
}

export default MainContainer
