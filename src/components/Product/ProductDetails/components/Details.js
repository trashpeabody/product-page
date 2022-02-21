const Details = ({ product }) => {
  return (
    <>
      <span className='overtitle'>Sneaker Company</span>
      <h1 className='product-name'>{product.name}</h1>
      <p className='product-description'>{product.description}</p>
      <div className='price-container'>
        <h2 className='price'>{product.price}</h2>
        {product.hasDiscount
          ? <span className='discount'>{product.discount}</span>
          : null}
      </div>
      <h3 className='previous-price'>{product.prevPrice}</h3>
    </>
  )
}

export default Details
