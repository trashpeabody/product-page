import './styles/Button.css'

const Button = ({ handleClick, onMouseEnter, onMouseLeave, isHover, children }) => {
  const classValue = isHover
    ? 'change-quantiy filter'
    : 'change-quantiy'
  return (
    <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={classValue} type='button' onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
