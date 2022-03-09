import { v1 as uuid } from 'uuid'
import bcrypt from 'bcrypt'
import User from '../models/User.mjs'

const products = []

const queryResolvers = {
  productCount: () => products.length,
  allProducts: () => products,
  findProduct: (root, args) => {
    const { name } = args
    return products.find(product => product.name === name)
  },
  findUser: (root, args) => {
    const { name } = args
    return User.findOne({ name })
  },
  allUsers: (root, args) => {
    return User.find({})
  }
}

const mutationResolvers = {
  addUser: async (root, args) => {
    const passwordHash = await bcrypt.hash(args.password, 10)
    const user = new User({
      name: args.name,
      password: passwordHash,
      id: uuid(),
      url: args.url
    })
    return user.save()
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
