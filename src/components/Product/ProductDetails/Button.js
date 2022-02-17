import './styles/Button.css'

const Button = ({ handleClick, src }) => {
  return (
    <button className='change-quantiy' type='button' onClick={handleClick}>
      <img src={src} alt='Button for changing product quantity' />
    </button>
  )
}

export default Button
