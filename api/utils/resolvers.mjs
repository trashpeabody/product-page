import bcrypt from 'bcrypt'
import User from '../models/User.mjs'
import mongoose from 'mongoose'
import { AuthenticationError } from 'apollo-server'
import credentials from '../credentials.mjs'
import jwt from 'jsonwebtoken'

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
    User.findOne({ name })
      .then(result => {
        mongoose.connection.close()
        return result
      })
      .catch(err => {
        console.error(err)
      })
  },
  logIn: (root, args) => {
    const { name, password } = args
    User.findOne({ name })
      .then(async result => {
        const user = result
        await bcrypt.compare(user.password, password)
          .then(res => {
            const userForToken = {
              id: user._id,
              username: user.password
            }
            const token = jwt.sign(userForToken, credentials.jwt.password)
            return token
          })
          .catch(err => {
            console.error(err)
            throw new AuthenticationError('User does not exist or password is incorrect.')
          })
      })
      .catch(err => {
        console.error(err)
        throw new AuthenticationError('User does not exist or password is incorrect.')
      })
  },
  allUsers: (root, args) => {
    User.find({})
      .then(result => {
        mongoose.connection.close()
        return result
      })
      .catch(err => {
        console.error(err)
      })
  }
}

const mutationResolvers = {
  addUser: async (root, args) => {
    const passwordHash = await bcrypt.hash(args.password, 10)
    const user = new User({
      name: args.name,
      password: passwordHash,
      url: args.url
    })
    const savedUser = await user.save()
    const userForToken = {
      id: savedUser._id.toString(),
      username: savedUser.name
    }
    const token = jwt.sign(userForToken, credentials.jwt.key)
    return { name: user.name, id: savedUser._id.toString(), url: args.url, token: token }
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
