
import LightboxImages from './LightboxImages'
import MainImages from '../MainImages'

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
