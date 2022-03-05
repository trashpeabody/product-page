import { useState } from 'react'
import { Link } from 'react-router-dom'

/* eslint-disable react/jsx-indent */
const LoginForm = ({ isOpened }) => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  //   const query = gql`
  //   query {
  //     allProducts {
  //       name
  //       description
  //       price {
  //         basePrice
  //         hasDiscount
  //         discount
  //       }
  //       id
  //     }
  //   }
  // `

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
            <button className='login__button pointer' type='button'> Create account </button>
          </div>
        </form>
      : <></>
  )
}

export default LoginForm
