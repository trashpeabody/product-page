import Thumbnail from './Thumbnail'
import { handleClick } from '../handlers/Images'

const ThumbnailContainer = ({ thumbnails, setThumbnails, setImage }) => {
  return (
    <div className='thumbnails-container'>
      {thumbnails.map(thumbnail =>
        <Thumbnail
          key={thumbnail.index}
          handleClick={handleClick(thumbnails, setThumbnails, setImage, thumbnail.index)}
          thumbnail={thumbnail}
        />
      )}
    </div>
  )
}

export default ThumbnailContainer
