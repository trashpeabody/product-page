export const handleClick = (thumbnails, setThumbnails, setImage, index) => {
  return () => {
    setThumbnails(
      thumbnails.map(
        thumb => thumb.index === index
          ? { ...thumb, isSelected: true }
          : { ...thumb, isSelected: false }
      )
    )
    setImage(thumbnails[index].mainSrc)
  }
}

export const handleNav = (isPrev, thumbnails, setThumbnails, setImage) => {
  return () => {
    let index = thumbnails.findIndex((thumb) => thumb.isSelected === true)
    isPrev
      ? index === 0
          ? index = thumbnails.length - 1
          : index = index - 1
      : index === 3
        ? index = 0
        : index = index + 1
    setThumbnails(
      thumbnails.map(
        thumb => thumb.index === index
          ? { ...thumb, isSelected: true }
          : { ...thumb, isSelected: false }
      )
    )
    setImage(thumbnails[index].mainSrc)
  }
}

export const handleMainClick = () => {
  const lightbox = document.querySelector('.lightbox')
  lightbox.style.display = 'flex'
}

export const handleHoverIn = (isPrev) => {
  return () => {
    const prev = document.querySelector('.prev').firstElementChild.firstElementChild
    const next = document.querySelector('.next').firstElementChild.firstElementChild
    isPrev
      ? prev.style.stroke = 'var(--primary)'
      : next.style.stroke = 'var(--primary)'
  }
}

export const handleHoverOut = (isPrev) => {
  return () => {
    const prev = document.querySelector('.prev').firstElementChild.firstElementChild
    const next = document.querySelector('.next').firstElementChild.firstElementChild
    isPrev
      ? prev.style.stroke = 'var(--very-dark-blue)'
      : next.style.stroke = 'var(--very-dark-blue)'
  }
}

export const handleCloseClick = () => {
  const lightbox = document.querySelector('.lightbox')
  lightbox.style.display = 'none'
}