const products = []

const productCount = () => products.length

const allProducts = () => products

const findProduct = (root, args) => {
  const { name } = args
  return products.find(product => product.name === name)
}

module.exports = { productCount, allProducts, findProduct }
