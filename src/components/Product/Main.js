import Images from './Images'

const Main = () => {
  return (
    <main className="container">

      <Images />

      <div className="product-info-container">
        <span className="overtitle">Sneaker Company</span>
        <h1 className="product-name">Fall Limited Edition Sneakers</h1>
        <p className="product-description">These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="price-container">
          <h2 className="price">$125.00</h2> <span className="discount">50%</span>
        </div>
        <h3 className="previous-price">$250.00</h3>
        <form>
          <fieldset className="quantity">
            <button className="minus" type="button">-</button>
            <input className="quantity-value" type="text" name="quantity" value="1" />
            <button className="plus" type="button">+</button>
          </fieldset>
          <input className="add" type="button" value="Add to cart" />
        </form>
        
      </div>

      <div className="lightbox">
        <div className="main-container">
          <img className="main-image" src="./images/image-product-1.jpg" alt="Product main image" srcset="" />
          <span><img className="close" src="./images/icon-close.svg" alt="" srcset="" /></span>
        </div>
        
        <div className="thumbnails-container">
          <div className="selected lightbox-thumbnail"><img src="./images/image-product-1-thumbnail.jpg" alt="Product image thumbnail" srcset="" /></div>
          <div className="thumbnail"><img src="./images/image-product-2-thumbnail.jpg" alt="Product image thumbnail" srcset="" /></div>
          <div className="thumbnail"><img src="./images/image-product-3-thumbnail.jpg" alt="Product image thumbnail" srcset="" /></div>
          <div className="thumbnail"><img src="./images/image-product-4-thumbnail.jpg" alt="Product image thumbnail" srcset="" /></div>
        </div>
      </div>

    </main>
  )
}

export default Main