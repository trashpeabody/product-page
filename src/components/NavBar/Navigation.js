import Logo from './assets/logo.svg'
import './styles/Navigation.css'

const Navigation = () => {
  return (
    <div className='nav-container-left'>
      <a href='/' target='_blank'>
        <Logo width='140' height='20' />
      </a>
      <ul>
        <li><a href='/' target='_blank'>Collections</a></li>
        <li><a href='/' target='_blank'>Men</a></li>
        <li><a href='/' target='_blank'>Women</a></li>
        <li><a href='/' target='_blank'>About</a></li>
        <li><a href='/' target='_blank'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Navigation
