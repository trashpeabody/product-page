import './styles/Thumb.css'

const Thumb = ({ isHover, src }) => {
  const classValue = isHover
    ? 'thumb filter'
    : 'thumb'
  return (
    <div className={classValue}>
      <img src={src} alt='Product image thumbnail' />
    </div>

  )
}

export default Thumb
