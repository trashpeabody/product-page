import ProductImage from './ProductImage'
import Info from './Info'
import Lightbox from './Lightbox'

const product = {
  name: 'Fall Limited Edition Sneakers',
  description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: '$125.00',
  hasDiscount: true,
  discount: '50%',
  prevPrice: '$250.00'
}

const Main = () => {
  return (
    <main className="container">
      <ProductImage />
      <Info product={product} />
      <Lightbox />
    </main>
  )
}

export default Main