import { useState } from 'react'
import Filter from './Filter'

const Thumbnail = ({ thumbnail, handleClick }) => {
  const classValue = thumbnail.isSelected
    ? 'selected thumbnail'
    : 'thumbnail'

  const [isHover, setIsHover] = useState(false)

  const handleHoverIn = () => {
    setIsHover(true)
  }

  const handleHoverOut = () => {
    setIsHover(false)
  }

  return (
    <div onClick={handleClick} onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} className={classValue}>
      <Filter isHover={isHover} />
      <img src={thumbnail.src} alt='Product image thumbnail' />
    </div>
  )
}

export default Thumbnail
