/* eslint-disable react/jsx-indent */
const LoginForm = ({ isOpened }) => {
  return (
    isOpened
      ? <form className='login'>
          <label className='login__label'>Username</label>
          <input className='login__input' type='text' name='user' placeholder='Username' />
          <label className='login__label'>Password</label>
          <input className='login__input' type='password' name='pass' placeholder='Password' />
          <button className='login__button pointer' type='submit'> Login </button>
        </form>
      : <></>
  )
}

export default LoginForm
