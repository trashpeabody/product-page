const { initialUsers } = require('./helpers')
const { findUser, allUsers, addUser } = require('../schema/userResolvers')
const User = require('../models/User')
const mongoose = require('mongoose')
require('../db')

beforeEach(async () => {
  await User.deleteMany({})

  for (const user of initialUsers) {
    const userObject = new User(user)
    await userObject.save()
  }
})

describe('Test user resolvers', () => {
  test('Return correct number of users', async () => {
    const result = await allUsers()
    expect(result).toHaveLength(2)
    result.forEach((user) => expect(user.name).not.toBeNull)
  })

  test('All users returned correctly', async () => {
    const result = await allUsers()
    result.forEach((user) =>
      expect([user.name, user.password]).not.toBeNull
    )
  })

  test('User is not created if args not given', () => {
    addUser().catch(err => {
      expect(err).toBe('User is not created if args not given')
    })
  })

  test('TypeError thrown when calling findUser with no args', () => {
    expect(() => {
      findUser()
    }).toThrow(TypeError)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
