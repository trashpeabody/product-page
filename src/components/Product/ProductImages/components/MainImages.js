import { useContext } from 'react'
import ThumbnailContainer from './ThumbnailContainer'
import Context from '../../../../context/ImageContext'
import { handleMainClick } from '../handlers/Images'

const MainImages = () => {
  const { thumbnails, setThumbnails, image, setImage } = useContext(Context)
  return (
    <>
      <img className='main-image pointer' src={image} onClick={handleMainClick} alt='Product main image' />
      <ThumbnailContainer thumbnails={thumbnails} setThumbnails={setThumbnails} setImage={setImage} />
    </>
  )
}

export default MainImages
