import { useContext } from 'react'
import Thumbnail from './Thumbnail'
import Context from './context/ImageContext'
import Close from './assets/icon-close.svg'
import Prev from './assets/icon-previous.svg'
import Next from './assets/icon-next.svg'
import './styles/Images.css'

const Images = ({ isLightBox }) => {
  const context = useContext(Context)

  const handleClick = (index) => {
    return () => {
      context.setThumbnails(
        context.thumbnails.map(
          thumb => thumb.index === index
            ? { ...thumb, isSelected: true }
            : { ...thumb, isSelected: false }
        )
      )
      context.setImage(context.thumbnails[index].mainSrc)
    }
  }

  const handleMainClick = () => {
    const lightbox = document.querySelector('.lightbox')
    lightbox.style.display = 'flex'
  }

  const handleCloseClick = () => {
    const lightbox = document.querySelector('.lightbox')
    lightbox.style.display = 'none'
  }

  const handleNav = (isPrev) => {
    return () => console.log(isPrev, 'Nav')
  }

  const handleHoverIn = (isPrev) => {
    return () => {
      const prev = document.querySelector('.prev').firstElementChild.firstElementChild
      const next = document.querySelector('.next').firstElementChild.firstElementChild
      isPrev
        ? prev.style.stroke = 'var(--primary)'
        : next.style.stroke = 'var(--primary)'
    }
  }

  const handleHoverOut = (isPrev) => {
    return () => {
      const prev = document.querySelector('.prev').firstElementChild.firstElementChild
      const next = document.querySelector('.next').firstElementChild.firstElementChild
      isPrev
        ? prev.style.stroke = 'var(--very-dark-blue)'
        : next.style.stroke = 'var(--very-dark-blue)'
    }
  }

  return (
    <>
      {
        isLightBox
          ? (
            <div className='lightbox-container'>
              <img id='main-image-lightbox' className='main-image' src={context.image} onClick={handleMainClick} alt='Product main image' />
              <Close className='close' onClick={handleCloseClick} width='30' height='30' viewBox='0 0 15 15' />

              <span className='arrow prev' onMouseEnter={handleHoverIn(true)} onMouseLeave={handleHoverOut(true)}>
                <Prev onClick={handleNav(true)} width='12' height='18' />
              </span>

              <span className='arrow next' onMouseEnter={handleHoverIn(false)} onMouseLeave={handleHoverOut(false)}>
                <Next onClick={handleNav(false)} width='13' height='18' />
              </span>

              <div className='thumbnails-container'>
                {context.thumbnails.map(thumbnail =>
                  <Thumbnail key={thumbnail.index} handleClick={handleClick(thumbnail.index)} thumbnail={thumbnail} />
                )}
              </div>
            </div>)

          : (
            <>
              <img id='main-image-out' className='main-image' src={context.image} onClick={handleMainClick} alt='Product main image' />
              <div className='thumbnails-container'>
                {context.thumbnails.map(thumbnail =>
                  <Thumbnail key={thumbnail.index} handleClick={handleClick(thumbnail.index)} thumbnail={thumbnail} />
                )}
              </div>
            </>
            )
        }
    </>
  )
}

export default Images
