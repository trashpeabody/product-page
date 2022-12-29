import { Button } from '../General/Button'
import { productsList } from './productList'

const Collection = () => {
  return (
    <main className='container'>
      <div className='collection'>
        {productsList.map(product => {
          return (
            <div key={product.index} className='collection__item'>
              <img src={product.url} />
              <div>
                <h2>{product.name}</h2>
                <span>$ {product.price}</span>
              </div>
              <Button>Comprar</Button>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Collection
