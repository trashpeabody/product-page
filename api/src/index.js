const typeDefs = require('./schema/typeDefs')
const resolvers = require('./schema/resolvers')
require('./db')
const { ApolloServer } = require('apollo-server')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
