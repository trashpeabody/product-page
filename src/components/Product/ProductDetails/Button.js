const Button = ({ className, handleClick, type, children }) => {
  const onMouseEnter = (event) => {
    event.target.classList.add('filter')
  }

  const onMouseLeave = (event) => {
    event.target.classList.remove('filter')
  }

  return (
    <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className} type={type} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
