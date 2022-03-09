import { useState } from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navigation = () => {
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
        <Logo className='logo-container__logo' />
      </Link>
      <div className='nav-links-container'>
        <ul className='nav-links'>
          <li className='nav-links__element'><a href='/'>Collections</a></li>
          <li className='nav-links__element'><a href='/'>Men</a></li>
          <li className='nav-links__element'><a href='/'>Women</a></li>
          <li className='nav-links__element'><a href='/'>About</a></li>
          <li className='nav-links__element'><a href='/'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
