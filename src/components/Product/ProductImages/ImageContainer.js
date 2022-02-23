
import LightboxImages from './components/LightboxImages'
import MainImages from './components/MainImages'

const ImageContainer = ({ isLightBox }) => {
  const classValue = isLightBox
    ? 'product_container__lightbox'
    : 'product-container__image'
  return (
    <div className={classValue}>
      {isLightBox
        ? <LightboxImages />
        : <MainImages />}
    </div>
  )
}

export default ImageContainer
