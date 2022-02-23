const Details = ({ product }) => {
  return (
    <div className='product-details'>
      <span className='product-details__overtitle'>Sneaker Company</span>
      <h1 className='product-details__name'>{product.name}</h1>
      <p className='product-details__description'>{product.description}</p>
      <div className='product-details__price-container'>
        <div className='current-price'>
          <h2 className='current-price__value'>{product.price}</h2>
          {product.hasDiscount
            ? <span className='current-price__discount'>{product.discount}</span>
            : null}
        </div>
        <h3 className='product-details__previous-price'>{product.prevPrice}</h3>
      </div>
    </div>
  )
}

export default Details
