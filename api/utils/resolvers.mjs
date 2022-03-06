import { users, products } from './database.mjs'
import { v1 as uuid } from 'uuid'
import bcrypt from 'bcrypt'

const queryResolvers = {
  productCount: () => products.length,
  allProducts: () => products,
  findProduct: (root, args) => {
    const { name } = args
    return products.find(product => product.name === name)
  },
  findUser: (root, args) => {
    const { name } = args
    return users.find(user => user.name === name)
  }
}

const mutationResolvers = {
  addUser: async (root, args) => {
    const passwordHash = await bcrypt.hash(args.password, 10)
    const user = {
      name: args.name,
      password: passwordHash,
      id: uuid()
    }
    users.push(user)
    return user
  }
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

const resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
  Product: typeResolvers
}

export default resolvers
