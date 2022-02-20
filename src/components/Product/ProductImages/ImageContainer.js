
import LightboxImages from './LightboxImages'
import MainImages from './MainImages'
import './styles/ImageContainer.css'

const ImageContainer = ({ isLightBox }) => {
  const classValue = isLightBox
    ? 'lightbox'
    : 'product-image-container'
  return (
    <div className={classValue}>
      {isLightBox
        ? <LightboxImages />
        : <MainImages />}
    </div>
  )
}

export default ImageContainer
