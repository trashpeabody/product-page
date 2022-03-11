import { ApolloServer } from 'apollo-server'
import typeDefs from './schema/typeDefs.mjs'
import resolvers from './schema/resolvers.mjs'
import './db.js'

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
