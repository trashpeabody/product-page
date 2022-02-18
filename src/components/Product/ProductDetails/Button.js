import './styles/Button.css'

const Button = ({ handleClick, children }) => {
  return (
    <button className='change-quantiy' type='button' onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
