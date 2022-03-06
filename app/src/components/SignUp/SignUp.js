import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

const SignUp = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const ADD_USER = gql`
  mutation createUser($name: String!, $password: String!) {
    addUser(
      name: $name, 
      password: $password
    ) {
      name
      password
      id
    }
  }
`

  const [createUser] = useMutation(ADD_USER, {
    onCompleted: (data) => console.log(data)
  })

  const updateClasses = (target) => {
    if (target.value === '') {
      target.classList.remove('filled')
      target.nextElementSibling.classList.remove('filled')
    } else {
      target.classList.add('filled')
      target.nextElementSibling.classList.add('filled')
    }
  }

  const handleUserChange = ({ target }) => {
    setUser(target.value)
    updateClasses(target)
  }

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value)
    updateClasses(target)
  }

  const handleFocus = ({ target }) => {
    target.nextElementSibling.classList.add('focus')
  }

  const handleFocusOut = ({ target }) => {
    target.nextElementSibling.classList.remove('focus')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(user, password)
    createUser({ variables: { name: user, password: password } })
    setUser('')
    setPassword('')
  }

  return (
    <main className='container'>
      <div className='signup-container'>
        <form className='signup' onSubmit={handleSubmit}>
          <h1 className='signup__text'>Create your Sneakers account</h1>
          <div className='signup__textfield'>
            <input
              className='user-input'
              type='text'
              name='user'
              value={user}
              onChange={handleUserChange}
              onFocus={handleFocus}
              onBlur={handleFocusOut}
            />
            <label className='user-label' htmlFor='user'>Username</label>
          </div>

          <div className='signup__textfield'>
            <input
              className='signup__input'
              type='password'
              name='pass'
              value={password}
              onChange={handlePasswordChange}
              onFocus={handleFocus}
              onBlur={handleFocusOut}
            />
            <label className='signup__label password-label' htmlFor='user'>Password</label>
          </div>
          <button
            className='signup__button pointer'
            type='submit'
          >
            Signup
          </button>
        </form>
      </div>

    </main>
  )
}

export default SignUp
