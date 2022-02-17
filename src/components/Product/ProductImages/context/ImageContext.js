import { createContext, useState } from 'react'
import Image1 from '../assets/image-product-1.jpg'
import Image2 from '../assets/image-product-2.jpg'
import Image3 from '../assets/image-product-3.jpg'
import Image4 from '../assets/image-product-4.jpg'
import Thumb1 from '../assets/image-product-1-thumbnail.jpg'
import Thumb2 from '../assets/image-product-2-thumbnail.jpg'
import Thumb3 from '../assets/image-product-3-thumbnail.jpg'
import Thumb4 from '../assets/image-product-4-thumbnail.jpg'

const Context = createContext({})

const initialThumbnails = [
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
  }
]

export const ImageSrcProvider = ({ children }) => {
  const [image, setImage] = useState(Image1)
  const [thumbnails, setThumbnails] = useState(initialThumbnails)

  return (
    <Context.Provider value={{ image, setImage, thumbnails, setThumbnails }}>
      {children}
    </Context.Provider>
  )
}

export default Context
