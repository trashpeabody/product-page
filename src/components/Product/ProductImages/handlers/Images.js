export const doNavigation = (isPrev, thumbnails, setThumbnails) => {
  let index = thumbnails.findIndex((thumb) => thumb.isSelected === true)
  isPrev
    ? index === 0
        ? index = thumbnails.length - 1
        : index = index - 1
    : index === 3
      ? index = 0
      : index = index + 1
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

export const handleNav = (isPrev, thumbnails, setThumbnails) => {
  return () => {
    doNavigation(isPrev, thumbnails, setThumbnails)
  }
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
  const lightbox = document.querySelector('.product-container__lightbox')
  lightbox.style.display = 'none'
}
