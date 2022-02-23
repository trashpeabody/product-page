import Logo from '../assets/logo.svg'

const Navigation = () => {
  return (
    <div className='nav-container__left'>
      <a className='logo-container' href='/' target='_blank'>
        <Logo className='logo-container__logo' />
      </a>
      <ul className='nav-links'>
        <li className='nav-links__element'><a href='/' target='_blank'>Collections</a></li>
        <li className='nav-links__element'><a href='/' target='_blank'>Men</a></li>
        <li className='nav-links__element'><a href='/' target='_blank'>Women</a></li>
        <li className='nav-links__element'><a href='/' target='_blank'>About</a></li>
        <li className='nav-links__element'><a href='/' target='_blank'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Navigation
