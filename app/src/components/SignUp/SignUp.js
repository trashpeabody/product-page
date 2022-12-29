import { useState } from 'react'
import Icon from '../../assets/user.png'
import { UploadClient } from '@uploadcare/upload-client'
import { useUser, updateClasses } from './SignUp.Helpers'
import { useNavigate } from 'react-router-dom'

const client = new UploadClient({ publicKey: process.env.STORAGE_KEY })

const SignUp = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState(Icon)
  const [file, setFile] = useState('')
  const createUser = useUser()
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    client.uploadFile(file)
      .then(({ cdnUrl }) => {
        createUser({ variables: { name: userName, password: password, url: cdnUrl } })
        setUserName('')
        setPassword('')
        setImage(Icon)
        setFile('')
        navigate('/')
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
              type='text'
              name='user'
              value={userName}
              onChange={({ target }) => {
                setUserName(target.value)
                updateClasses(target)
              }}
              onFocus={({ target }) => target.nextElementSibling.classList.add('focus')}
              onBlur={({ target }) => target.nextElementSibling.classList.remove('focus')}
              autoComplete='off'
            />
            <label className='user-label' htmlFor='user'>Username</label>
          </div>

          <div className='signup__textfield'>
            <input
              type='password'
              name='pass'
              value={password}
              onChange={({ target }) => {
                setPassword(target.value)
                updateClasses(target)
              }}
              onFocus={({ target }) => target.nextElementSibling.classList.add('focus')}
              onBlur={({ target }) => target.nextElementSibling.classList.remove('focus')}
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
