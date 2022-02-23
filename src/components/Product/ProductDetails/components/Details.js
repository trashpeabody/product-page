const Details = ({ product }) => {
  return (
    <div className='product-details'>
      <span className='product-details__overtitle'>Sneaker Company</span>
      <h1 className='product-details__name'>{product.name}</h1>
      <p className='product-details__description'>{product.description}</p>
      <div className='product-details__price-container'>
        <h2 className='price'>{product.price}</h2>
        {product.hasDiscount
          ? <span className='discount'>{product.discount}</span>
          : null}
      </div>
      <h3 className='product-details__previous-price'>{product.prevPrice}</h3>
    </div>
  )
}

export default Details
