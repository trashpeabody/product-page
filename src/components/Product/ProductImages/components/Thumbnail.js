import { useState } from 'react'
import Thumb from './Thumb'

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
      <Thumb isHover={isHover} src={thumbnail.src} />
    </div>
  )
}

export default Thumbnail
