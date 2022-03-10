import { useContext, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import Icon from '../../assets/user.png'
import { UploadClient } from '@uploadcare/upload-client'
import UserContext from '../../context/UserContext'

const client = new UploadClient({ publicKey: 'bda0435abe123e6bc475' })

const SignUp = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState(Icon)
  const [file, setFile] = useState('')
  const { setUser } = useContext(UserContext)

  const ADD_USER = gql`
    mutation createUser($name: String!, $password: String!, $url: String) {
      addUser(
        name: $name, 
        password: $password,
        url: $url
      ) {
        name
        id
        url
        token
      }
    }
`

  const [createUser] = useMutation(ADD_USER, {
    onCompleted: ({ addUser }) => {
      window.localStorage.setItem(
        'token', JSON.stringify(addUser.token))
      setUser(addUser)
    }
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
    setUserName(target.value)
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
    client.uploadFile(file)
      .then(({ cdnUrl }) => {
        createUser({ variables: { name: userName, password: password, url: cdnUrl } })
        setUserName('')
        setPassword('')
        setImage(Icon)
        setFile('')
      })
      .catch((err) => console.error(err))
  }

  const onFileAdded = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]))
    setFile(event.target.files[0])
  }

  return (
    <main className='container'>
      <div className='signup-container'>
        <form className='signup' onSubmit={handleSubmit}>
          <h1 className='signup__text'>Create your Sneakers account</h1>
          <label className='signup__profile-image'>
            <input type='file' onChange={onFileAdded} />
            <img src={image} />
          </label>
          <div className='signup__textfield'>
            <input
              className='user-input'
              type='text'
              name='user'
              value={userName}
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
