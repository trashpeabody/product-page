import { cloneElement, useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({ children, links }) => {
  const [open, setOpen] = useState(false)

  const handleBugerClick = () => {
    const navLinks = document.querySelector('.nav-links-container')
    const hamburger = document.querySelector('.hamburger-menu')
    if (open) {
      navLinks.style.display = 'none'
      console.log(hamburger.children)
      hamburger.classList.remove('close')
    } else {
      navLinks.style.display = 'block'
      hamburger.classList.add('close')
    }
    setOpen(!open)
  }

  return (
    <div className='nav-container__left'>
      <div className='hamburger-menu' onClick={handleBugerClick}>
        <span className='hamburger-menu__bar' />
        <span className='hamburger-menu__bar' />
        <span className='hamburger-menu__bar' />
      </div>
      <Link to='/' className='logo-container'>
        {cloneElement(children(), { className: 'logo-container__logo' })}
      </Link>
      <div className='nav-links-container'>
        <ul className='nav-links'>
          {links.map(link => {
            return <li className='nav-links__element' key={link.index}><a href={`/${link.title}`}>{link.title}</a></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navigation
