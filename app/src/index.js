import ReactDOM from 'react-dom'
import App from './App'
import './style.scss'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { UserContextProvider } from './context/UserContext'
import { useEffect } from 'react'

const httpLink = createHttpLink({
  uri: process.env.DB_URL
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = window.localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
