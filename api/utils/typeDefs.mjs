import { gql } from 'apollo-server'

const globalDefs = `

enum Boolean {
    TRUE
    FALSE
  }
`

const productDefs = `
  type PriceSet {
    basePrice: Float!
    hasDiscount: Boolean!
    discount: Float
  }

  type Product {
    name: String!
    description: String!
    price: PriceSet!
    id: ID!
  }
`

const userDefs = `
  type User {
    name: String!
    password : String!
    id: String!
    url: String
  }
`

const queries = `
  type Query {
    productCount: Int!
    allProducts: [Product]!
    findProduct(name: String!): Product
    findUser(name: String!): User
    allUsers: [User]!
  }
`

const mutations = `
  type Mutation {
    addUser(
      name: String!
      password: String!
      url: String
    ) : User
  }
`

const typeDefs = gql`
  ${globalDefs}

  ${productDefs}

  ${userDefs}

  ${queries}

  ${mutations}
`

export default typeDefs
