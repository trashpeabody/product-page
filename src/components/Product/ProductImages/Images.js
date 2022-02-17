import { useContext } from 'react'
import Thumbnail from './Thumbnail'
import Context from './context/ImageContext'

import Close from './assets/icon-close.svg'
import './styles/Images.css'

const Images = ({ isLightBox }) => {

  const context = useContext(Context)

  const handleClick = (index) => {
    return () => {
      context.setThumbnails (
        context.thumbnails.map(
          thumb => thumb.index === index 
            ? {...thumb, isSelected: true}
            : {...thumb, isSelected: false}
        )
      )
      context.setImage (context.thumbnails[index].mainSrc)
    }
  }

  const handleMainClick = () => {
    const lightbox = document.querySelector(".lightbox")
    lightbox.style.display = 'flex'
  }

  const handleCloseClick = () => {
    const lightbox = document.querySelector(".lightbox")
    lightbox.style.display = 'none'
  }

  
  
  return (
    <>
      {isLightBox 
        ? <div className="lightbox-container">
            <img id="main-image-lightbox" className="main-image" src={context.image} onClick={handleMainClick} alt="Product main image" />
            <span><img className="close" src={Close} onClick={handleCloseClick} alt="Close button" /></span>
            <div className="thumbnails-container">
              {context.thumbnails.map (thumbnail => 
                <Thumbnail key={thumbnail.index} handleClick={handleClick(thumbnail.index)} thumbnail={thumbnail} />
              )}
            </div>
          </div>
        : <>
            <img id="main-image-out" className="main-image" src={context.image} onClick={handleMainClick} alt="Product main image" />
            <div className="thumbnails-container">
              {context.thumbnails.map (thumbnail => 
                <Thumbnail key={thumbnail.index} handleClick={handleClick(thumbnail.index)} thumbnail={thumbnail} />
              )}
            </div>
          </>
      }
    </>
  )
}

export default Images