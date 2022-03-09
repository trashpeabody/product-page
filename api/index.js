import { ApolloServer } from 'apollo-server'
import typeDefs from './utils/typeDefs.mjs'
import resolvers from './utils/resolvers.mjs'
import './db.js'

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
