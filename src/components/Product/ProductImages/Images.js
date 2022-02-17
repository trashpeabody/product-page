import { useState } from 'react'
import Thumbnail from './Thumbnail'

import Image1 from './assets/image-product-1.jpg'
import Image2 from './assets/image-product-2.jpg'
import Image3 from './assets/image-product-3.jpg'
import Image4 from './assets/image-product-4.jpg'
import Thumb1 from './assets/image-product-1-thumbnail.jpg'
import Thumb2 from './assets/image-product-2-thumbnail.jpg'
import Thumb3 from './assets/image-product-3-thumbnail.jpg'
import Thumb4 from './assets/image-product-4-thumbnail.jpg'
import './styles/Images.css'

const Images = ({ isLightBox }) => {

  let initialThumbnails = [
    {
      index: 0,
      isSelected: true,
      src: Thumb1,
      mainSrc: Image1
    },
    {
      index: 1,
      isSelected: false,
      src: Thumb2,
      mainSrc: Image2
    },
    {
      index: 2,
      isSelected: false,
      src: Thumb3,
      mainSrc: Image3
    },
    {
      index: 3,
      isSelected: false,
      src: Thumb4,
      mainSrc: Image4
    },
  ]

  const [thumbnails, setThumbnails] = useState (initialThumbnails)

  const handleClick = (index) => {
    return () => {
      setThumbnails (
        thumbnails.map(
          thumb => thumb.index === index 
            ? {...thumb, isSelected: true}
            : {...thumb, isSelected: false}
        )
      )
    }
  }

  return (
    <>
      <img id="main-image-out" className="main-image" src={Image1} alt="Product main image" />
      <div className="thumbnails-container">
        {thumbnails.map (thumbnail => 
          <Thumbnail key={thumbnail.index} handleClick={handleClick(thumbnail.index)} thumbnail={thumbnail} />
        )}
      </div>
    </>
  )
}

export default Images