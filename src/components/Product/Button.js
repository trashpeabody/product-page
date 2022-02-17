const Button = ({ handleClick, src}) => {
  return (
    <button type="button" onClick={handleClick} >
      <img src={src} alt="Button for changing product quantity" />
    </button>
  )
}

export default Button