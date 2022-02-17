import Images from "./Images"
import './styles/Lightbox.css'

const Lightbox = () => {

  return (
    <div className="lightbox">
      <Images isLightBox={true} />
    </div>
  )
}

export default Lightbox