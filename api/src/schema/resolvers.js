
const dotenv = require('dotenv')
const { productCount, allProducts, findProduct } = require('./productResolvers')
const { addUser, findUser, logIn } = require('./userResolvers')
dotenv.config()

const queryResolvers = {
  productCount: productCount,
  allProducts: allProducts,
  findProduct: findProduct,
  findUser: findUser,
  logIn: logIn
}

const typeResolvers = {
  price: (root) => {
    return {
      basePrice: root.price,
      hasDiscount: root.hasDiscount,
      discount: root.discount
    }
  }
}

const mutationResolvers = {
  addUser: addUser
}

const resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
  Product: typeResolvers
}

module.exports = resolvers
