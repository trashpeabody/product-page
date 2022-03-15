const User = require('../models/User')
const bcrypt = require('bcrypt')
const { AuthenticationError, UserInputError } = require('apollo-server')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const { JWT_KEY } = process.env

const findUser = (root, args) => {
  const { name } = args
  User.findOne({ name })
    .then(result => {
      return result
    })
    .catch(err => {
      return err
    })
}

const logIn = (root, args) => {
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
          const token = jwt.sign(userForToken, JWT_KEY)
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
}

const allUsers = async (root, args) => {
  const result = await User.find({})
  return result
}

const addUser = async (root, args) => {
  try {
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
    const token = jwt.sign(userForToken, JWT_KEY)
    console.log(token)
    return { name: user.name, id: savedUser._id.toString(), url: args.url, token: token }
  } catch {
    return new UserInputError('Value provided is not correct or complete')
  }
}

module.exports = { findUser, logIn, allUsers, addUser }
