import { useContext } from 'react'
import Context from '../../../../context/ImageContext'
import Thumbnail from './Thumbnail'

const ThumbnailContainer = () => {
  const { thumbnails, setThumbnails } = useContext(Context)

  const handleClick = (index) => {
    return () => {
      for (const image of document.getElementsByClassName('main-image')) {
        const translation = 100 * index
        image.style.transform = `translateX(-${translation}%)`
      }
      setThumbnails(
        thumbnails.map(
          thumb => thumb.index === index
            ? { ...thumb, isSelected: true }
            : { ...thumb, isSelected: false }
        )
      )
    }
  }

  return (
    <div className='thumbnails-container'>
      {thumbnails.map(thumbnail =>
        <Thumbnail
          key={thumbnail.index}
          handleClick={handleClick(thumbnail.index)}
          thumbnail={thumbnail}
        />
      )}
    </div>
  )
}

export default ThumbnailContainer
