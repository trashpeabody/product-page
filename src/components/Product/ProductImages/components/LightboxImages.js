import { useContext } from 'react'
import Context from '../../../../context/ImageContext'
import ThumbnailContainer from './ThumbnailContainer'
import Close from '../assets/icon-close.svg'
import Prev from '../assets/icon-previous.svg'
import Next from '../assets/icon-next.svg'
import { handleMainClick, handleHoverIn, handleHoverOut, handleCloseClick, handleNav } from '../handlers/Images'

const LightboxImages = () => {
  const { thumbnails, setThumbnails, image, setImage } = useContext(Context)

  return (
    <div className='product-container__lightbox'>
      <img id='main-image-lightbox' className='main-image' src={image} onClick={handleMainClick} alt='Product main image' />
      <Close className='close' onClick={handleCloseClick} width='30' height='30' viewBox='0 0 15 15' />

      <span
        className='arrow prev'
        onMouseEnter={handleHoverIn(true)}
        onMouseLeave={handleHoverOut(true)}
        onClick={handleNav(true, thumbnails, setThumbnails, setImage)}
      >
        <Prev width='12' height='18' />
      </span>

      <span
        className='arrow next'
        onMouseEnter={handleHoverIn(false)}
        onMouseLeave={handleHoverOut(false)}
        onClick={handleNav(true, thumbnails, setThumbnails, setImage)}
      >
        <Next width='13' height='18' />
      </span>
      <ThumbnailContainer thumbnails={thumbnails} />
    </div>
  )
}

export default LightboxImages
