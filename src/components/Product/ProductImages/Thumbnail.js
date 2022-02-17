const Thumbnail = ({ thumbnail, handleClick }) => {
  const classValue = thumbnail.isSelected
    ? "selected thumbnail"
    : "thumbnail"

  return (
    <div onClick={handleClick} className={classValue}>
      <img src={thumbnail.src} alt="Product image thumbnail" />
    </div>
  )
}

export default Thumbnail