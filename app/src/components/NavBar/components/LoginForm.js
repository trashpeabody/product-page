import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../../context/NavBarContext'

/* eslint-disable react/jsx-indent */
const LoginForm = ({ isOpened }) => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const { profileOpened, setProfileOpened } = useContext(Context)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSignUp = () => {
    setProfileOpened(!profileOpened)
  }

  return (
    isOpened
      ? <form className='login' onSubmit={handleSubmit}>
          <input
            className='login__input'
            type='text'
            name='user'
            placeholder='Username'
            value={user}
            onChange={({ target }) => setUser(target.value)}
          />
          <input
            className='login__input'
            type='password'
            name='pass'
            placeholder='Password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <div className='login__button-container'>
            <button className='login__button pointer' type='submit'> Login </button>
            <Link to='/signup' onClick={handleSignUp} className='login__button pointer' type='button'> Create account </Link>
          </div>
        </form>
      : <></>
  )
}

export default LoginForm
