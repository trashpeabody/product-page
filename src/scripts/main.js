let mainImage = document.querySelector('.main-image')
let thumbnailsArray = Array.from(document.querySelectorAll('.thumbnail'))
let lastSelected = thumbnailsArray[0]

thumbnailsArray.map(thumb => {
  thumb.addEventListener('click', 
    () => {
      lastSelected.classList.remove('selected')
      thumb.classList.add('selected')
      mainImage.src = thumb.firstChild.src.replace('-thumbnail', '')
      lastSelected = thumb
    })
})

let lightbox = document.querySelector('.lightbox')
document.querySelector('.close').addEventListener('click', 
  () => {
    lightbox.style.display = 'none'
  })

document.querySelector('#main-image-out').addEventListener('click', 
  () => {
    lightbox.style.display = 'flex'
  })
