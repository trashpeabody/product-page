import { useSwipeable } from 'react-swipeable'
import { useContext } from 'react'
import Context from '../../../../context/ImageContext'
import Image1 from '../assets/image-product-1.jpg'
import Image2 from '../assets/image-product-2.jpg'
import Image3 from '../assets/image-product-3.jpg'
import Image4 from '../assets/image-product-4.jpg'
import { doNavigation } from '../handlers/Images'

const Slider = () => {
  const handleClick = () => {
    const lightbox = document.querySelector('.product-container__lightbox')
    lightbox.style.display = 'flex'
  }

  const { thumbnails, setThumbnails } = useContext(Context)

  const handlers = useSwipeable({
    onSwipedRight: () => {
      doNavigation(true, thumbnails, setThumbnails)
    },
    onSwipedLeft: () => {
      doNavigation(false, thumbnails, setThumbnails)
    },
    preventDefaultTouchmoveEvent: false
  })

  return (
    <div className='slider-container' {...handlers}>
      <img className='main-image pointer' src={Image1} onClick={handleClick} alt='Product main image' />
      <img className='main-image pointer' src={Image2} onClick={handleClick} alt='Product main image' />
      <img className='main-image pointer' src={Image3} onClick={handleClick} alt='Product main image' />
      <img className='main-image pointer' src={Image4} onClick={handleClick} alt='Product main image' />
    </div>
  )
}

export default Slider
