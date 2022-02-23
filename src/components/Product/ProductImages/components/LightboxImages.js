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
    <div className='lightbox'>
      <img className='lightbox__main-image' src={image} onClick={handleMainClick} alt='Product main image' />
      <Close className='lightbox__close pointer' onClick={handleCloseClick} width='30' height='30' viewBox='0 0 15 15' />

      <span
        className='lightbox__arrow prev pointer'
        onMouseEnter={handleHoverIn(true)}
        onMouseLeave={handleHoverOut(true)}
        onClick={handleNav(true, thumbnails, setThumbnails, setImage)}
      >
        <Prev width='12' height='18' />
      </span>

      <span
        className='lightbox__arrow next pointer'
        onMouseEnter={handleHoverIn(false)}
        onMouseLeave={handleHoverOut(false)}
        onClick={handleNav(false, thumbnails, setThumbnails, setImage)}
      >
        <Next width='13' height='18' />
      </span>
      <ThumbnailContainer thumbnails={thumbnails} setThumbnails={setThumbnails} setImage={setImage} />
    </div>
  )
}

export default LightboxImages
